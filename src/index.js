import _ from 'lodash';
import handleAPI from './handleAPI';
import weatherCard from './weatherCard';
import searchIcon from './searchIcon.svg';
import './style.css';

const content = document.getElementById("content");
const locationText = document.getElementById("location-text");
const inputSubmit = document.getElementById("input-submit");

const submitIcon = inputSubmit.querySelector("#search-icon");
submitIcon.src = searchIcon;

handleAPI.formatData("21250").then((data) => {
    locationText.textContent = `3-Day Forecast for ${data[0].location}`;
    for(let i=0; i<data.length; i++) {
        let newCard = weatherCard.newCard(data[i]);
        content.appendChild(newCard);
    }
});

inputSubmit.addEventListener("click", () => {
    const searchStr = document.getElementById("location-input").value;
    const oldCards = document.getElementsByClassName("weather-box");
    Array.from(oldCards).forEach(card => {
        card.innerHTML = "";
        card.remove();
    });

    handleAPI.formatData(searchStr).then((data) => {
        locationText.textContent = `3-Day Forecast for ${data[0].location}`;
        for(let i=0; i<data.length; i++) {
            let newCard = weatherCard.newCard(data[i]);
            content.appendChild(newCard);
        }
    }).catch((err) => {
        console.log(err);
        window.alert("Location not found, please try again");
    });

})


