import React, {useState} from 'react'
import { Scrollbars } from "react-custom-scrollbars-2";
import '../cart/cart.css';
import Items from './../Items/Items';
import { products } from './../Products/Products';
import { useContext } from 'react';
import { CartContext } from '../cart/Cart';

const ContextCart = () => {
    // const [item, setItem] = useState(products);

    const {item, clearCart, totalItem, totalAmount } = useContext(CartContext);

    if(item.length === 0) {
      return (
        <>
        <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">
            0
            </span> items
          in shopping cart
        </p>
        </section>
        </>
      )
    }

  return (
    <div>
         <div>
        <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">
            {totalItem} 
            </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : 
            <span>{totalAmount}₹</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" 
          onClick={clearCart}
          >
            Clear Cart
          </button>
        </div> 
      </section>
    </div>
    </div>
  )
}

export default ContextCart