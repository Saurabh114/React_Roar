import "./cart-dropdown.styles.scss";
import Button from "../button/button.component"

const CardDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CardDropdown;