class Forecast {
  constructor() {
    this.key = "1kgKzfM2iWnVL5GHj7bs5QbvMA6gscrQ";
    this.weatheURI = "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI = "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getCurrentWeather(cityDetails.Key);

    return {
      cityDetails,
      weather
    };
  }

  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();

    return data[0];
  }

  async getCurrentWeather(locationKey) {
    const query = `${locationKey}?apikey=${this.key}`;
    const response = await fetch(this.weatheURI + query);
    const data = await response.json()

    return data[0];
  }
}