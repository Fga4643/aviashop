import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.sass"
import {FaHome, FaChevronRight} from "react-icons/fa";
import {Dispatch} from "react";
import {Spare} from "../../Types.js";

const Breadcrumbs = ({ selectedSpare, setSelectedSpare }: { selectedSpare:Spare | null, setSelectedSpare: Dispatch<Spare | null> }) => {
    const location = useLocation()

    let currentLink = ''

    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {

        currentLink += `/${crumb}`

        if (crumb == "spares")
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink} onClick={() => setSelectedSpare(null)}>
                        Запчасти
                    </Link>

                    <FaChevronRight className={"chevron-icon"}/>

                </div>
            )
        }

        if (currentLink.match(new RegExp('spares/(\d*)')))
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink}>
                        { selectedSpare?.name}
                    </Link>

                    <FaChevronRight className={"chevron-icon"}/>

                </div>
            )
        }
    });


    return (
        <div className={"breadcrumbs-wrapper"}>
            <div className={"breadcrumbs"}>

                <div className="crumb">

                    <Link to={currentLink}>
                        <FaHome className={"home-icon"}/>
                    </Link>

                    <FaChevronRight className={"chevron-icon"} />

                </div>

                {crumbs}

            </div>
        </div>

    )
}

export default Breadcrumbs;