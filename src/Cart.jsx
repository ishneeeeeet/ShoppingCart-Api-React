const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <div>
      <h1>Your cart</h1>
      {cartItem.map((item) => (
        <li key={item.id}>
          <img src={item.tinyImage} height="80" alt="" />
          {item.productName}
          <span>{item.productPrice}</span>
          <button onClick={() => removeItem(item)}>Remove</button>
        </li>
      ))}
      {/* if everything is empty */}
      {cartItem.length >= 1 ? (
        <div>Total: {amount}</div>
      ) : (
        <h1> Cart is Empty</h1>
      )}
      <button onClick={buyNow}>Pay here</button>
    </div>
  );
};

export default Cart;
