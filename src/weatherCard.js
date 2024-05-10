const weatherCard = (() => {
    const newStatCont = () => {
        const newCont = document.createElement("div");
        newCont.classList.add("stat-cont");
        return(newCont);
    }
    
    const newCard = (dayData) => {
        const newCard = document.createElement("div");
        newCard.classList.add("weather-box");

        const cardDate = document.createElement("h2");
        cardDate.classList.add("wc-date");
        let dateArr = dayData.date.split("-");
        cardDate.textContent = `${dateArr[1]} / ${dateArr[2]} / ${dateArr[0]}`;
        newCard.appendChild(cardDate);

        const highTemp = newStatCont();

        const highTempLabel = document.createElement("h3");
        highTempLabel.classList.add("stat-label");
        highTempLabel.textContent = `High Temp`;
        highTemp.appendChild(highTempLabel);

        const highTempValue = document.createElement("h3");
        highTempValue.classList.add("stat-value");
        highTempValue.textContent = `${dayData.maxTemp[0]}°F`;
        highTempValue.addEventListener("mouseenter", () => {
            highTempValue.textContent = `${dayData.maxTemp[1]}°C`;
        })
        highTempValue.addEventListener("mouseleave", () => {
            highTempValue.textContent = `${dayData.maxTemp[0]}°F`;
        })
        highTemp.appendChild(highTempValue);

        newCard.appendChild(highTemp);

        const sunriseTime = newStatCont();

        const sunriseTimeLabel = document.createElement("h3");
        sunriseTimeLabel.classList.add("stat-label");
        sunriseTimeLabel.textContent = `Sunrise`;
        sunriseTime.appendChild(sunriseTimeLabel);

        const sunriseTimeValue = document.createElement("h3");
        sunriseTimeValue.classList.add("stat-value");
        sunriseTimeValue.textContent = `${dayData.sunrise}`;
        sunriseTime.appendChild(sunriseTimeValue);

        newCard.appendChild(sunriseTime);

        const avgTemp = newStatCont();

        const avgTempLabel = document.createElement("h3");
        avgTempLabel.classList.add("stat-label");
        avgTempLabel.textContent = `Avg Temp`;
        avgTemp.appendChild(avgTempLabel);

        const avgTempValue = document.createElement("h3");
        avgTempValue.classList.add("stat-value");
        avgTempValue.textContent = `${dayData.avgTemp[0]}°F`;
        avgTempValue.addEventListener("mouseenter", () => {
            avgTempValue.textContent = `${dayData.avgTemp[1]}°C`;
        })
        avgTempValue.addEventListener("mouseleave", () => {
            avgTempValue.textContent = `${dayData.avgTemp[0]}°F`;
        })
        avgTemp.appendChild(avgTempValue);

        newCard.appendChild(avgTemp);

        const sunsetTime = newStatCont();

        const sunsetTimeLabel = document.createElement("h3");
        sunsetTimeLabel.classList.add("stat-label");
        sunsetTimeLabel.textContent = `Sunset`;
        sunsetTime.appendChild(sunsetTimeLabel);

        const sunsetTimeValue = document.createElement("h3");
        sunsetTimeValue.classList.add("stat-value");
        sunsetTimeValue.textContent = `${dayData.sunset}`;
        sunsetTime.appendChild(sunsetTimeValue);

        newCard.appendChild(sunsetTime);

        const lowTemp = newStatCont();

        const lowTempLabel = document.createElement("h3");
        lowTempLabel.classList.add("stat-label");
        lowTempLabel.textContent = `Low Temp`;
        lowTemp.appendChild(lowTempLabel);

        const lowTempValue = document.createElement("h3");
        lowTempValue.classList.add("stat-value");
        lowTempValue.textContent = `${dayData.minTemp[0]}°F`;
        lowTempValue.addEventListener("mouseenter", () => {
            lowTempValue.textContent = `${dayData.minTemp[1]}°C`;
        })
        lowTempValue.addEventListener("mouseleave", () => {
            lowTempValue.textContent = `${dayData.minTemp[0]}°F`;
        })
        lowTemp.appendChild(lowTempValue);

        newCard.appendChild(lowTemp);

        const rainChance = newStatCont();

        const rainChanceLabel = document.createElement("h3");
        rainChanceLabel.classList.add("stat-label");
        rainChanceLabel.textContent = `Rain`;
        rainChance.appendChild(rainChanceLabel);

        const rainChanceValue = document.createElement("h3");
        rainChanceValue.classList.add("stat-value");
        rainChanceValue.textContent = `${dayData.rainChance}%`;
        rainChance.appendChild(rainChanceValue);

        newCard.appendChild(rainChance);


        return(newCard);
    }

    return{ newCard }
})()

export default weatherCard;