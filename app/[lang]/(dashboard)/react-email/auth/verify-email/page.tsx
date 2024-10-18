"use client";
import { render } from "@react-email/render";
import VerifyEmail from "./verify-email";

const ReviewEmailTemplate = () => {
  const verifyEmail = render(<VerifyEmail />);
  return (
    <div className="py-10">
      <div dangerouslySetInnerHTML={{ __html: verifyEmail }} />
    </div>
  );
};

export default ReviewEmailTemplate;
