import {useSelector,useDispatch} from 'react-redux'
import { removeItem } from '../features/addCartFeature/addCartSlice'
import './AddCart.css'
import Heading from '../Heading'
function AddCart(){
    
const items=useSelector(state=>state.items)
const dispatch=useDispatch()
console.log(items);
if(items.length==0)return(
  <Heading heading1="The Cart is waiting to be filled!!!" heading2="Fill it ,with Flowers and Joy!!!"/>
)
    return (
      <>

      <Heading heading1="Shopping Cart" heading2="Delivering to : 574114"/>

      <ul>
      {items.map((item)=>(
        <li key={item.id}>
        <div className="cardItemContainer" >
        <div className="cardItemImageContainer">
          <img
            className="cardItemImage"
            src="src\assets\CartFlowerImages.webp"
          />
        </div>
        <div className="cardItemFlowerNameContainer">
          <p className="cartItemFlowerName">{item.flowerName}</p>
          <p>Price : {item.flowerPrice}</p>
        </div>
        <div className="cartItemDateAndTimeContainer">
          <p>Date : 30/11/25</p>
          <p>Time : 9AM - 12PM</p>
        </div>
        <div>
          <button className="cardItemButton">Buy</button>
          <button className="cardItemButton" onClick={()=>
            dispatch(removeItem(item.id))
          }>
            Cancel
          </button>
        </div>
      </div>
      </li>
      ))}
      </ul>  
      </>

    )
}

export default AddCart;