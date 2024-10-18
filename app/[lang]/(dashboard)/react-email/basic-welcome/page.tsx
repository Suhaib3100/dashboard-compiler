"use client";
import { render } from "@react-email/render";
import BasicTemplate from "./basic-template";
const Basic = () => {
  const basicHtmlContent = render(<BasicTemplate />);
  return (
    <div>
      <div className="py-10">
        <div dangerouslySetInnerHTML={{ __html: basicHtmlContent }} />
      </div>
    </div>
  );
};

export default Basic;
