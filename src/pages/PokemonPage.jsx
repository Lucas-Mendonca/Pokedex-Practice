import { PokemonCard } from "../components/PokemonCard/PokemonCard"
import SearchBar from "../components/SearchBar"
import { useEffect, useState } from "react"
import PokeAPIv2 from "../services/api"

const PokemonPage = ({ children }) => {
    const [querry, setQuerry] = useState('não alterado')
    const updateQuerry = (value) => {
        if(typeof value === 'string') {
            setQuerry(value)
        }
        return
    }

    // Temp api fetch

    const [pokeList, setPokeList] = useState([])

    useEffect(() => {
        PokeAPIv2.get('/pokemon/')
         .then((re) => {
            PokeAPIv2.get(`/pokemon/?limit=${re.data.count}`)
            .then((re) => {setPokeList(re.data.results)
                console.log(re)
            })
         })
    },[])
    //----------------

    return(
            <div>
                <SearchBar getQuerry={updateQuerry}/>
                <h1>{querry}</h1>
                {children}
                <PokemonCard filter={querry}/>
                <hr/>
                {pokeList.map((pokemon) => (
                <li id={`Poke:${pokemon.name}`} >{JSON.stringify(pokemon)}</li>
                ))}
            </div>
    )
}

export default PokemonPage