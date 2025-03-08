import './Heading.css';


function Heading({heading1,heading2="",visibilty=""}){
    return(
        <>
          <div className='headingContainer'>
            <p className='heading headFirst'>{heading1}</p>
            <p className={`heading headSecond ${visibilty}`}>{heading2}</p>
          </div>  
        </>
    );
}
export default Heading;