import { BlogType } from "@/interfaces/blog.interface";
import Layout from "@/layout";
import { BlogService } from "@/services/blog.service";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

const DetailedBlog: NextPage<DetailedBlogPageProps> = ({ blog }) => {
  const router = useRouter();
  return (
    <Layout>
      <div className="container text-white">
        <button
          onClick={() => router.push("/")}
          className="btn btn-outline-primary mt-5"
        >
          Back
        </button>
        <h1 className="mt-5">{blog.title}</h1>
        <h5 className="mt-5">{blog.excerpt}</h5>
        <p className="mt-5">{blog.description}</p>
      </div>
    </Layout>
  );
};

export default DetailedBlog;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const blog = await BlogService.getBlogsBySlug(query.slug as string);
  return {
    props: { blog },
  };
};

interface DetailedBlogPageProps {
  blog: BlogType;
}
