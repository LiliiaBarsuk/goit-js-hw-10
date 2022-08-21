export default function createCountryMarkup(country) {
    let lang = country[0].languages.map(language => {
        return language.name
    })
    let languages = lang.join(', ')
   return `<div class="header-container">
   <img src="${country[0].flags.svg}" class="flag" width="50" height="40">
   <h1 class="header">${country[0].name}</h1>
</div>
<div class="caption-container">
<p class="text"><span class="text-bold">Capital: </span>${country[0].capital}</p>
<p class="text"><span class="text-bold">Population: </span>${country[0].population}</p>
<p class="text"><span class="text-bold">Languages: </span>${languages}</p>
</div>`
}