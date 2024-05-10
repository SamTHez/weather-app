import _ from 'lodash';
import handleAPI from './handleAPI';
import weatherCard from './weatherCard';
import './style.css';

const content = document.getElementById("content");
const locationText = document.getElementById("location-text");

handleAPI.formatData().then((data) => {
    locationText.textContent = `3-Day Forecast for ${data[0].location}`;
    for(let i=0; i<data.length; i++) {
        let newCard = weatherCard.newCard(data[i]);
        content.appendChild(newCard);
    }
});


