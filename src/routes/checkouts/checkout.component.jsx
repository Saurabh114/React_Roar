import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <h4>Product</h4>
        </div>
        <div className="header-block">
          <h4>Description</h4>
        </div>
        <div className="header-block">
          <h4>Quantity</h4>
        </div>
        <div className="header-block">
          <h4>Price</h4>
        </div>
        <div className="header-block">
          <h4>Remove</h4>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <h6 className="total">Total: ₹{cartTotal}</h6>
    </div>
  );
};

export default Checkout;
