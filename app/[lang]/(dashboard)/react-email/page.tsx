"use client";

import AdvancedTemplate from "./advanced-template";
import { render } from "@react-email/render";
const Advanced = () => {
  const advancedHtmlContent = render(<AdvancedTemplate />);

  return (
    <div>
      <div className="py-10">
        <div dangerouslySetInnerHTML={{ __html: advancedHtmlContent }} />
      </div>
    </div>
  );
};

export default Advanced;
