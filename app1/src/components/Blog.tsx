import { FC } from "react";

interface BlogProps {}

const Blog: FC<BlogProps> = ({}) => {
  return (
    <div>
      Blog
      <div>testing update</div>
      <p> different browser check with markup update</p>
      <div> same browser check with markup update</div>
    </div>
  );
};

export default Blog;
