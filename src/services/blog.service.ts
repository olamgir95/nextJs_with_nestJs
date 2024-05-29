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
};
