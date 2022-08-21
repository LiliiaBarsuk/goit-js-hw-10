import './css/styles.css';
const DEBOUNCE_DELAY = 300;

import debounce from 'lodash.debounce';

import createCountryMarkup from './js/create-country-markup.js'
import createListOfCountryMarkup from './js/create-list.js'
import fetchCountries  from './js/fetchCountries.js';

const refs = {
    input: document.querySelector("#search-box"),
    countryList: document.querySelector(".country-list"),
    countryDesc: document.querySelector(".country-info"),
}

refs.input.addEventListener('input', debounce(start, DEBOUNCE_DELAY));

function start(event) {
    const name = event.target.value.trim()
     if (name === "") {
        clearAll()
    } else {
    fetchCountries(name).then(country => {
        if (country.length === 1) {
            clearAll()
            refs.countryDesc.innerHTML = createCountryMarkup(country)
        }
        else if (country.length > 1 && country.length <= 10) {
            clearAll()
            refs.countryList.insertAdjacentHTML('beforeend', createListOfCountryMarkup(country))
        }
        else if (country.length > 10) {
            clearAll()
            console.log("Too many matches found. Please enter a more specific name.");
        }
        else {
            clearAll()
            console.log("Oops, there is no country with that name");
        }
        
    }).catch(error => {
        clearAll()
        console.log("Oops, there is no country with that name");
     
    })
}
}

function clearAll() {
    refs.countryDesc.innerHTML = '';
    refs.countryList.innerHTML = '';
}