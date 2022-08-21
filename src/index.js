
const DEBOUNCE_DELAY = 300;

var debounce = require('lodash.debounce');


const refs = {
    input: document.querySelector(".input"),
    countryList: document.querySelector(".country-list"),
    countryDesc: document.querySelector(".country-description"),
}

refs.input.addEventListener('input', debounce(fetchCountries, 300));

function fetchCountries(event) {
 
    let name = event.target.value.trim()
    
     if (name = "") {
        clearAll()
    }
    const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
    fetch(url).then(r => {
        if (r.status !== 200) {
            throw new Error(r.status)
        }
        return r.json()
    })
    .then(country => {
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


function createCountryMarkup(data) {
    let lang = data[0].languages.map(language => {
        return language.name
    })
    let languages = lang.join(', ')
   return `<div class="header-container">
   <img src="${data[0].flags.svg}" class="flag" width="50" height="40">
   <h1 class="header">${data[0].name}</h1>
</div>
<div class="caption-container">
<p class="text"><span class="text-bold">Capital:</span>${data[0].capital}</p>
<p class="text"><span class="text-bold">Population:</span>${data[0].population}</p>
<p class="text"><span class="text-bold">Languages:</span>${languages}</p>
</div>`
}

function createListOfCountryMarkup(data) {
   
    return data.map(el => {
        return `<li class="country-item"><img src="${el.flags.svg}" class="list-img" width="40" height="30">${el.name}</li>`
    }).join("")
 
}

function clearAll() {
    refs.countryDesc.innerHTML = '';
    refs.countryList.innerHTML = '';
}