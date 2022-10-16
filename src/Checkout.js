import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{ basket , user },dispatch]= useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img 
            className='checkout__ad'
            src='https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-5.png'
            />
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>
                    Your shopping Basket
                </h2>
                {basket.map(item=>(<CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />))}
                
                
            </div>
        </div>
        <div className="checkout__right">
          <Subtotal/>
          <h2>The subtotal go here</h2>
        </div>
    </div> 
  )
}

export default Checkout