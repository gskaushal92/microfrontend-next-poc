import Blog from "@/components/Blog";
import { FC } from "react";

interface NewsProps {}

const News: FC<NewsProps> = ({}) => {
  return (
    <div>
      News
      <Blog />
    </div>
  );
};

export default News;
