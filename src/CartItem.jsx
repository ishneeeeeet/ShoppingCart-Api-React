const CartItem = ({ product, addInCart }) => {
  return (
    <div>
      <div>
        <img src={product.smallImage} height="250" alt="" />
      </div>
      <div>{product.productName}</div>
      <div>{product.productPrice}</div>
      <button onClick={() => addInCart(product)}>BuyNow</button>
      <br />
    </div>
  );
};

export default CartItem;
