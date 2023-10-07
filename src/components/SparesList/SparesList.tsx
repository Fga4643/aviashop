import SpareCard from "./SpareCard/SpareCard";
import "./SparesList.sass"
import {useEffect, useState} from "react";
import {Spare} from "../../Types.js";
import SearchBar from "./SearchBar/SearchBar";

const SparesList = () => {

    const [spares, setSpares] = useState<Spare[]>([])

    const [searchQuery, setSearchQuery] = useState<string>("")

    const searchSpares = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/spares/search?query=${searchQuery}`)

        const spares:Spare[] = await response.json()

        setSpares(spares)
    }

    useEffect(() => {
        searchSpares()
    }, [searchQuery])

    const sparesCards = spares.map(spare => {
        return <SpareCard spare={spare} key={spare.id}/>
    })

    return (
        <div className="spares-list-container">

            <div className="filters-container">

                <SearchBar setSearchQuery={setSearchQuery} />

            </div>

            <div className="cards-container">

                {sparesCards}

            </div>

        </div>
    )
}

export default SparesList;