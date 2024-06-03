import Form from "@/components/form/form";
import { FormValues } from "@/components/form/form.props";
import { BlogType } from "@/interfaces/blog.interface";
import Layout from "@/layout";
import { BlogService } from "@/services/blog.service";
import { GetServerSideProps, NextPage } from "next";
import React from "react";

const EditBlog: NextPage<EditBlogPageProps> = ({ blog }) => {
  const onSubmit = async (formData: FormValues) => {
    const data = await BlogService.editBlog(formData, blog._id);
    return data;
  };
  return (
    <Layout>
      <div className="container text-white ">
        <Form
          onSubmit={onSubmit}
          sectionTitle={`Edit ${blog.title}`}
          values={blog}
        />
      </div>
    </Layout>
  );
};
export default EditBlog;

export const getServerSideProps: GetServerSideProps<
  EditBlogPageProps
> = async ({ query }) => {
  console.log("query", query);

  const blog = await BlogService.getBlogsBySlug(query.slug as string);
  return {
    props: { blog },
  };
};

interface EditBlogPageProps {
  blog: BlogType;
}
