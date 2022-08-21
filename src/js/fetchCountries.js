export default function fetchCountries(name) {
    
return fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`).then(r => {
    if (r.status !== 200) {
        throw new Error(r.status)
    }
    return r.json()
})
}