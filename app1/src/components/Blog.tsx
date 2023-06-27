import { FC } from "react";

interface BlogProps {}

const Blog: FC<BlogProps> = ({}) => {
  return (
    <div>
      Blog
      <div>testing update</div>
      <p> checking update with dynamic import</p>
    </div>
  );
};

export default Blog;
