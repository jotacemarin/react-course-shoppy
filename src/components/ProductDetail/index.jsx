import { useCallback, useContext, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppyCartContext } from "../../context";
import "./styles.css";

const ProductDetail = () => {
  const { productToShow, isProductDetailOpen, closeProductDetail } =
    useContext(ShoppyCartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productToShow !== product?.id) {
      setProduct(null);
      fetch(`https://fakestoreapi.com/products/${productToShow}`)
        .then((response) => response.json())
        .then((response) => setProduct(response));
    }
  }, [productToShow, product]);

  const handleClose = useCallback(() => {
    closeProductDetail();
    setProduct(null);
  }, [closeProductDetail]);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-2">
        <h2 className="font-medium text-xl">Details</h2>
        <button className="cursor-pointer" onClick={handleClose}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </button>
      </div>
      {product && (
        <>
          <figure>
            <img
              src={product?.image}
              alt={`${product?.title}, ${product?.category}, ${product?.description}`}
            />
          </figure>
          <p className="flex flex-col p-6">
            <span className="font-medium text-2xl">${product?.price}</span>
            <span className="font-medium text-md">{product?.title}</span>
            <span className="font-light text-sm">{product?.description}</span>
          </p>
        </>
      )}
    </aside>
  );
};

export default ProductDetail;
