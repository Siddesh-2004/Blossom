import { Link } from 'react-router-dom';
import './OccassionCard.css'

function OccassionCard({occassionImageUrl,page="Birthday"}){
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