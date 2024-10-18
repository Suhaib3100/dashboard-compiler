"use client";

import { render } from "@react-email/render";
import Agency from "./agency";

const AgencyEmail = () => {
  const agency = render(<Agency />);

  return (
    <div className="py-10">
      <div dangerouslySetInnerHTML={{ __html: agency }} />
    </div>
  );
};

export default AgencyEmail;
