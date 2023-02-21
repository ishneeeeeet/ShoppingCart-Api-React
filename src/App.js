import { useState } from "react";
import "./styles.css";
import { toast } from "react-toastify";
import BuyPage from "./BuyPage";
import Cart from "./Cart";

export default function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const alreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });
    if (alreadyAdded !== -1) {
      toast("already added", {
        type: "error"
      });
    } else {
      setCartItem([...cartItem, item]);
    }
  };

  const buyNow = () => {
    setCartItem([]);
    toast("purchase complete", {
      type: "success"
    });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <BuyPage addInCart={addInCart} />
      <div>
        <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
      </div>
    </div>
  );
}
