"use client"
import { render } from '@react-email/render';
import VerifyOtp from './verify-otp';

const ReviewEmailTemplate = () => {
  const verifyOtp = render(<VerifyOtp />);
  return (

    <div className="py-10">
      <div dangerouslySetInnerHTML={{ __html: verifyOtp }} />
    </div>
  );
};

export default ReviewEmailTemplate;