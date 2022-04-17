// const apiKey = 'zOAaLRjIHgzuuEXvMv3dWaP1JVrJwxdm';


// //Get City
// const getCity = async (city) => {

//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${apiKey}&q=${city}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];
// }

// //Get Weather
// const getWeather = async (id) => {

//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${apiKey}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];
// }


/*============================================================================================================*/

//Using Class

class Forecast {
    constructor() {
        this.key = 'zOAaLRjIHgzuuEXvMv3dWaP1JVrJwxdm';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }
    async updateCity(city) {
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);

        //Using Object Shorthand Notation
        return { cityDetails, weather };
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }
    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }

}