import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img 
            className='checkout__ad'
            src='https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-5.png'
            />
            <div>
                <h2 className='check__title'>
                    Your shopping Basket
                </h2>
                {/*BasketItem */}
                {/*BasketItem */}
                {/*BasketItem */}
                {/*BasketItem */}
                {/*BasketItem */}
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