/* eslint-disable react/prop-types */
import { useCallback, useContext } from "react";

import { ShoppyCartContext } from "../../context";

const Card = ({ id, price, title, category, image }) => {
  const { openProductDetail } = useContext(ShoppyCartContext);

  const openProduct = useCallback(
    () => openProductDetail(id),
    [openProductDetail, id]
  );

  return (
    <div className="group relative" onClick={openProduct}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={image}
          alt={`${title}, ${price}, ${category}`}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <div className="cursor-pointer">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </div>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
};

export default Card;
