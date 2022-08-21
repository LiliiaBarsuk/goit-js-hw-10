export default function createListOfCountryMarkup(info) {
   
    return info.map(el => {
        return `<li class="country-item"><img src="${el.flags.svg}" class="list-img" width="40" height="30">${el.name}</li>`
    }).join("")
 
}