export default function createCountryMarkup(data) {
    let lang = data[0].languages.map(language => {
        return language.name;
    });
    let languages = lang.join(', ');
   return `<div class="header-container">
   <img src="${data[0].flags.svg}" class="flag" width="50" height="40">
   <h1 class="header">${data[0].name}</h1>
</div>
<div class="caption-container">
<p class="text"><span class="text-bold">Capital: </span>${data[0].capital}</p>
<p class="text"><span class="text-bold">Population: </span>${data[0].population}</p>
<p class="text"><span class="text-bold">Languages: </span>${languages}</p>
</div>`;
}