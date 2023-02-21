import { useState, useEffect } from "react";
import Axios from "axios";
import { faker } from "@faker-js/faker";
import CartItem from "./CartItem";

const url = "https://api.npoint.io/3069c774f52ab6c6793e";

const BuyPage = ({ addInCart }) => {
  const [products, setProducts] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get(url);

    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.commerce.product(),
      productPrice: faker.finance.amount(),
      id: faker.datatype.uuid()
    }));

    setProducts(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Buy Page</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </div>
        ))}
        <br />
      </div>
    </div>
  );
};

export default BuyPage;
