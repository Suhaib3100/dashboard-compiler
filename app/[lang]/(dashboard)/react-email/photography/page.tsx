"use client";

import { render } from "@react-email/render";
import Blog from "./blog";

const BlogEmail = () => {
  const blog = render(<Blog />);

  return (
    <div className="py-10">
      <div dangerouslySetInnerHTML={{ __html: blog }} />
    </div>
  );
};

export default BlogEmail;
