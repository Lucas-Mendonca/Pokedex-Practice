export function SearchBar({ getQuerry }) {
    return(
            <div>
                <hr/>
                <h1>Searchbar</h1>
                <input 
                    onChange={(value) => getQuerry(value.target.value)}
                />
                <hr/>
            </div>
    )
}