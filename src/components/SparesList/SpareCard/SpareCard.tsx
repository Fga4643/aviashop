import "./SpareCard.sass"
import {Spare} from "../../../Types.js";
import {Link} from "react-router-dom";
import SpareImage from "../../SpareImage/SpareImage";
import {motion} from "framer-motion"

const SpareCard = ({ spare }: { spare:Spare }) => {

    return (
        <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{scale: 1.1}}
            className="spare-card-wrapper"
            key={spare.id}>

            <div className="top">
                <SpareImage spare_id={spare.id} />
            </div>

            <div className="center">
                <span>{spare.name}</span>
                <span>Цена: {spare.price}₽</span>
            </div>

            <div className="bottom">
                <Link to={"/spares/" + spare.id}>Подробнее</Link>
            </div>

        </motion.div>
    )

}

export default SpareCard;