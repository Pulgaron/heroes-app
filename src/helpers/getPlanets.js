
export const getPlanets = async() =>{

    const url = `https://swapi.dev/api/planets/`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const planets = data.map(planet => {

        return {
            id: planet.name,
            title: planet.diameter,
            url: planet.climate,
            gravity: planet.gravity,
            population: planet.population,
            residents: planet.residents,
            films: planet.films
        }   
    })
    return planets
}