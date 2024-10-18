"use client";

import { render } from "@react-email/render";
import Corporate from "./corporate";

const CorporateEmailPage = () => {
  const corporate = render(<Corporate />);

  return (
    <div className="py-10">
      <div dangerouslySetInnerHTML={{ __html: corporate }} />
    </div>
  );
};

export default CorporateEmailPage;
