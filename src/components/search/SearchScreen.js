import React from 'react'
import queryString from 'query-string'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation } from 'react-router-dom'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { useMemo } from 'react'
import {useFetch} from '../../hooks/useFetch'

export const SearchScreen = ({history}) => {
    
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    
    
    const { loading, error, data} = useFetch(proxyurl+'https://swapi.dev/api/planets')

    console.log(data)

    var planets = []

    if(data){

        const {results} = data
        planets = results
    }

    const getPlanetsByName = (name) =>{

        if(name === '')
            return []

        return planets.filter(planet => planet.name.toLocaleLowerCase().includes(name))
}

    const location = useLocation()

    const {q = ''} = queryString.parse(location.search)

    
    const [formValues, handleInputChange] = useForm({
        searchText: q
    })
    
   

    const {searchText} = formValues
    
    //const heroesFiltered =  useMemo(() => getHeroesByName(q), [q])
    const planetsFiltered =  useMemo(() => getPlanetsByName(q), [q])
    const handleSearch = e =>{
        e.preventDefault()

        history.push(`?q=${searchText}`)
        
    }

    return (
        <div>
            <h1>Hero Finder</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Here</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            autoComplete="off"
                            onChange={handleInputChange}
                        >
                        </input>

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">

                    <h4>Results</h4>
                    <hr/>

                    {
                        (q==='' ) && <div className="alert alert-info">
                        Search a hero
                        </div>
                    }

{
                        (q !=='' && planetsFiltered.length === 0 ) && <div className="alert alert-danger">
                        There is no hero with {q}
                        </div>
                    }

                    {
                        planetsFiltered.map(planet => (
                        <li>{planet.name}</li>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
