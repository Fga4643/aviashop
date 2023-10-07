import {FaUser} from "react-icons/fa";
import {BsFillBasketFill} from "react-icons/bs";
import "./Header.sass"
import {BiLogoTelegram} from "react-icons/bi";

const Header = () => {
    return (
        <header className={"header-wrapper"}>

            <div className="logo-container">
                <BiLogoTelegram className="logo"/>
            </div>

            <div className="right-menu-container">

                <div className="menu-item">
                    <BsFillBasketFill/>
                </div>

                <div className="menu-item">
                    <FaUser/>
                    <span>Антон</span>
                </div>

            </div>

        </header>
    )
}

export default Header;