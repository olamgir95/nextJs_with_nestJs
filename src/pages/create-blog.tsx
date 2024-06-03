import Form from "@/components/form/form";
import { FormValues } from "@/components/form/form.props";
import Layout from "@/layout";
import { BlogService } from "@/services/blog.service";
import React from "react";

const CreateBlog = () => {
  const onSubmit = async (formData: FormValues) => {
    const data = await BlogService.createBlog(formData);
    return data;
  };
  return (
    <Layout>
      <div className="container text-white ">
        <Form onSubmit={onSubmit} sectionTitle="Create blog" />
      </div>
    </Layout>
  );
};

export default CreateBlog;
