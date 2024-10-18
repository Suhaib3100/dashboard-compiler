"use client";
import { render } from "@react-email/render";
import ResetPassword from "./reset-password";

const ReviewEmailTemplate = () => {
  const resetPassword = render(<ResetPassword />);
  return (
    <div className="py-10">
      <div dangerouslySetInnerHTML={{ __html: resetPassword }} />
    </div>
  );
};

export default ReviewEmailTemplate;
