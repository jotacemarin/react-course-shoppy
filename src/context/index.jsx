import { createContext, useMemo, useState } from "react";

export const ShoppyCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppyCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [productToShow, setProductToShow] = useState(null);
  const isProductDetailOpen = useMemo(
    () => Boolean(productToShow),
    [productToShow]
  );
  const openProductDetail = (product) => setProductToShow(product);
  const closeProductDetail = () => setProductToShow(null);

  return (
    <ShoppyCartContext.Provider
      value={{
        count,
        setCount,
        productToShow,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
      }}
    >
      {children}
    </ShoppyCartContext.Provider>
  );
};
