import { FormValues } from "@/components/form/form.props";
import { BlogType } from "@/interfaces/blog.interface";
import axios from "axios";

export const BlogService = {
  async getAllBlogs() {
    try {
      const { data } = await axios.get<BlogType[]>(
        `${process.env.NEXT_PUBLIC_DOMAIN_API}/blog`
      );

      return data;
    } catch (error: any) {
      console.error(
        "Error fetching blogs:",
        error.response ? error.response.data : error.message
      );
      throw new Error("Failed to fetch blogs");
    }
  },

  async getBlogsBySlug(slug: string) {
    try {
      const { data } = await axios.get<BlogType>(
        `${process.env.NEXT_PUBLIC_DOMAIN_API}/blog/${slug}`
      );

      return data;
    } catch (error: any) {
      console.error(
        "Error fetching blogs:",
        error.response ? error.response.data : error.message
      );
      throw new Error("Failed to fetch blogs");
    }
  },

  async deleteBlog(id: string) {
    const { status } = await axios.delete<BlogType>(
      `${process.env.NEXT_PUBLIC_DOMAIN_API}/blog/${id}`,
      { data: { id } }
    );

    return status;
  },

  async createBlog(dataForm: FormValues) {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_DOMAIN_API}/blog`,
      dataForm
    );
    return data;
  },

  async editBlog(dataForm: FormValues, id: string) {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_DOMAIN_API}/blog/${id}`,
      dataForm
    );
    return data;
  },
};
