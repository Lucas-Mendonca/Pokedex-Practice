import axios from "axios";


const PokeAPIv2Data = () => {
    axios
     .get('https://pokeapi.co/api/v2/pokemon/')
     .then((response) => console.log(response))
    
}

export default PokeAPIv2Data