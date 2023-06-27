import { FC } from "react";

interface BlogProps {}

const Blog: FC<BlogProps> = ({}) => {
  return (
    <div>
      Blog
      <div>testing update</div>
      <p> Deployment with markup update</p>
      <p> deploying only app1</p>
    </div>
  );
};

export default Blog;
