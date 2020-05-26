const cityInputForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const wIcon = document.querySelector('.icon img')

const forecast = new Forecast();

const updateUi = ({ cityDetails, weather }) => {
  //update details template  
  details.innerHTML = `          
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;${weather.Temperature.Metric.Unit}</span>
    </div>
  `;
  //show card 
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
  //day/night img  
  let timeSource = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
  time.setAttribute('src', timeSource)
  //weather icon 
  const wIconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  wIcon.setAttribute('src', wIconSrc);
  wIcon.setAttribute('alt', weather.WeatherText);
}

cityInputForm.addEventListener('submit', async event => {
  event.preventDefault();

  //get city
  const city = cityInputForm.city.value.trim();
  localStorage.setItem('city', city);

  cityInputForm.reset();

  //update ui
  await forecast.updateCity(city)
    .then(data => updateUi(data))
    .catch(err => console.error(err))
})

if (localStorage.getItem('city')) {
  forecast.updateCity(localStorage.getItem('city')).then(data => updateUi(data));
}