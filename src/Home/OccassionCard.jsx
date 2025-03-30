import './OccassionCard.css'
import {Link} from "react-router-dom"

function OccassionCard({occassionImageUrl,page="Aniversary"}){
    return(
        <>
        <Link to={page}>
            <div className="occassionCardContainer">
                <img className="occassionImage" src={occassionImageUrl}></img>
            </div>
        </Link>
        </>
    );
}
export default OccassionCard;