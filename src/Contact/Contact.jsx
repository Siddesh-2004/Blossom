import './Contact.css';
import Heading from '../Heading';

function Contact(){
    return(
        <>
            <div className="contactContainer">
                <div className="contactHeading">
                    <Heading
                    heading1="CONTACT US" 
                    heading2=""/>
                    <p className="contactSubHeading">Have a query? Need assistance? </p>
                   <p className="contactSubHeading"> Simply reach out for answers. We love staying in touch with you!</p>
                </div>
                <div className="detailsContainer">
                    <label className="emailLabel">Email:</label>
                    <p className="details">siddeshpoojary@gmail.com</p>
                </div>
                <br/>
                <div className="detailsContainer">
                    <label className="phoneLabel">Phone:</label>
                    <p className="details">+91 7676859564</p>
                </div>
                <br/>

                <div className="detailsContainer">
                    <label className="phoneLabel">Address:</label>
                    <p className="details">GuruKiran House,<br/>
                    IndraNagar Washington DC<br/>
                    United States America</p>
                </div>
            </div>
        </>
    )
}

export default Contact;