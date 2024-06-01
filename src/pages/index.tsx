import { BlogCard } from "@/components";
import { BlogType } from "@/interfaces/blog.interface";
import { BlogService } from "@/services/blog.service";
import { GetServerSideProps, NextPage } from "next";

const Home: NextPage<HomePageProps> = ({ blogs }) => {
  console.log("blogs", blogs);
  return (
    <div className="album py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {blogs.map((item) => (
            <BlogCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs = await BlogService.getAllBlogs();
  return {
    props: { blogs },
  };
};

interface HomePageProps {
  blogs: BlogType[];
}
