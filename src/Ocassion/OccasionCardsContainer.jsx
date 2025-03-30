import React from 'react'
import Card from '../Card'
import './OccasionCardsContainer.css'
import {Link} from 'react-router-dom'
function OccasionCardsContainer({page}) {
    return (
    <>
    <div className='OccasionCardsContainer'>
    <Card
          flowers={{
            src: "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-mauve-surprise-385687-m.jpg",
            name: "SkyPink Roses",
            rating: 4.6,
            avalablityStatus: "In Stock",
            price: 6999
          }}
        />
        <Card
          flowers={{
            src:"https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-mauve-surprise-385687-m.jpg" ,
            name: "Chocolately Delight",
            rating: 4.0,
            avalablityStatus: "Out of Stock",
            price: 9999
          }}
         
        />
        <Card
          flowers={{
            src: "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-mauve-surprise-385687-m.jpg",
            name: "Love With Red",
            rating: 4.9,
            avalablityStatus: "In Stock",
            price: 3999,
          }}/>
          <Link to={page}>
         <div className='addMoreContainer' >
         <span class="material-symbols-outlined ">
add_circle
</span>
         </div>
         </Link>
    </div> 
    </>
  )
}

export default OccasionCardsContainer;
