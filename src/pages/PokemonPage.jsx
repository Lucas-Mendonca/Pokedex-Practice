import { useContext, useEffect } from "react"
import PokemonContext from "../contexts/PokemonContext"
import PokeAPIv2Data from "../services/api/PokeApi"

const PokemonPage = ({ children }) => {
    const { PokemonCount } = useContext(PokemonContext)

    useEffect(() => {
        PokeAPIv2Data()
    },[])

    return(
            <div>
                <h1>{PokemonCount}</h1>
                {children}
            </div>
    )
}

export default PokemonPage