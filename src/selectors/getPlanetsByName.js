
export const getPlanetsByName = (name) =>{

    if(name === '')
        return []

    name = name.toLocaleLowerCase()
    return planets.filter(planet => planet.name.toLocaleLowerCase().includes(name))
}