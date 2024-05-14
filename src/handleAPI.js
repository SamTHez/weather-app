const handleAPI = (() => {
    const getWeatherData = async (location) => {
        const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=7c56b0175bcd48b58d901542242004&q=${location}&days=3&aqi=no&alerts=no`;
        const res = await fetch(API_URL);
        return await res.json();
    }

    async function formatData(location) {
        let data = await getWeatherData(location);
        let dayArray = data.forecast.forecastday;
        let formattedData = [];
        for(let i=0; i<dayArray.length; i++) {
            let dayData = dayArray[i];
            let formattedDay = {
                date: dayData.date,
                sunrise: dayData.astro.sunrise,
                sunset: dayData.astro.sunset,
                avgTemp: [dayData.day.avgtemp_f, dayData.day.avgtemp_c],
                maxTemp: [dayData.day.maxtemp_f, dayData.day.maxtemp_c],
                minTemp: [dayData.day.mintemp_f, dayData.day.mintemp_c],
                rainChance: dayData.day.daily_chance_of_rain
            };
            if(data.location.country = "United States of America") {
                formattedDay.location = `${data.location.name}, ${data.location.region}`;
            } else {
                formattedDay.location = ``
            }
            formattedData.push(formattedDay);
        }
        return(formattedData);
    }   
    
    return{ formatData };
})()

export default handleAPI;