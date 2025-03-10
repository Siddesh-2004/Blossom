import './OccassionCard.css'

function OccassionCard({occassionImageUrl}){
    return(
        <>
            <div className="occassionCardContainer">
                <img className="occassionImage" src={occassionImageUrl}></img>
            </div>
        </>
    );
}
export default OccassionCard;