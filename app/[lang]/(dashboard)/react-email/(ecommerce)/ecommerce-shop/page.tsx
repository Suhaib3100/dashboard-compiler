"use client";
import { render } from "@react-email/render";
import Shoptemplate from "./shop-template";
const ShopPage = () => {
  const shopTemplate = render(<Shoptemplate />);
  return (
    <div className="py-10">
      <div dangerouslySetInnerHTML={{ __html: shopTemplate }} />
    </div>
  );
};

export default ShopPage;
