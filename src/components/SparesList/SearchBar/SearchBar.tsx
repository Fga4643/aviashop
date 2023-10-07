import {FaSearch} from "react-icons/fa";
import "./SearchBar.sass"
import {Dispatch, useState} from "react";

const SearchBar = ({setSearchQuery}: {setSearchQuery:Dispatch<string>}) => {
    const [input, setInput] = useState<string>("")



    return (

        <form className="search-container" action="/api/groups/search" method="GET" onSubmit={(e) => e.preventDefault()}>

            <input
                type="text"
                autoComplete="off"
                placeholder="Поиск"
                value={input}
                onChange={(event) => {
					setInput(event.target.value)
					setSearchQuery(event.target.value)
				}}
            />

            <button type="submit">
                <FaSearch />
            </button>

        </form>

    )
}

export default SearchBar;