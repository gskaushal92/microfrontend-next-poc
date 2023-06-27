import { FC } from "react";

interface BlogProps {}

const Blog: FC<BlogProps> = ({}) => {
  return (
    <div>
      Blog
      <div>testing update</div>
      <p> different browser check with markup update</p>
      <p> same browser check with markup update</p>
    </div>
  );
};

export default Blog;
