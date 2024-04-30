import { useEffect, useState } from "react";
import ProductDetail from "../../components/ProductDetail";
import CardsContainer from "../../components/CardsContainer";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        setItems(response);
      });
  }, []);

  return (
    <>
      <CardsContainer title="" cards={items} />
      <ProductDetail />
    </>
  );
}

export default Home;
