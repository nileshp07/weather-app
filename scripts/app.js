const inputForm = document.querySelector('form');
const cards = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

// const updateCity = async(city) => {

//     const cityDetails = await getCity(city);
//     const weather = await getWeather(cityDetails.Key);

//     //Using Object Shorthand Notation
//     return { cityDetails, weather };
// }

const updateUI = (data) => {

    console.log(data);
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    //Destructing the properties
    const { cityDetails, weather } = data;

    details.innerHTML = `
        <h3 class="my-3">${cityDetails.EnglishName}</h3>
        <h5 class="my-4">${weather.WeatherText}</h5>
        <div class="display-4 my-3">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //Updating the image & icons
    let iconsSrc = `icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconsSrc);

    let imgSrc = weather.IsDayTime ? `images/day.svg` : `images/night.svg`;
    time.setAttribute('src', imgSrc);

    //Removing d-none class if present
    if (cards.classList.contains('d-none')) {
        cards.classList.remove('d-none');
    }
}

inputForm.addEventListener('submit', e => {
    //Prevent Default Action
    e.preventDefault();

    //Get City/input value
    const city = inputForm.location.value.trim();
    inputForm.reset();

    //Update the UI with the new City
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

})