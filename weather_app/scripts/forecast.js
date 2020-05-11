const apiKey = "1kgKzfM2iWnVL5GHj7bs5QbvMA6gscrQ";
const citySearchUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
const currentConditionsUrl = "http://dataservice.accuweather.com/currentconditions/v1/";//${locationKey}";

const getCity = async (city) => {
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(citySearchUrl + query);  
  const data = await response.json();

  return data[0];
}

const getCurrentWeather = async (locationKey) => {
  const query = `${locationKey}?apikey=${apiKey}`;

  const response = await fetch(currentConditionsUrl + query);
  const data = await response.json()
  
  return data[0];
}

// getCity('Санкт-Петербург')
//   .then(data => {
//     return getCurrentWeather(data[0].Key);
//   })
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

