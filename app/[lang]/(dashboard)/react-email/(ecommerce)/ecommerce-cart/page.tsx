"use client";

import { render } from "@react-email/render";
import ShoppingCart from "./shopping-cart";
const ShopTemplate = () => {
  const shoppingCart = render(<ShoppingCart />);
  return (
    <div className="py-10">
      <div dangerouslySetInnerHTML={{ __html: shoppingCart }} />
    </div>
  );
};

export default ShopTemplate;
