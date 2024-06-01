import { calculateEstimatedTimeToRead } from "@/utils/time";
import { BlogCardProps } from "./blog-card.props";
import { useRouter } from "next/router";
import { BlogService } from "@/services/blog.service";
import { BlogType } from "@/interfaces/blog.interface";

const BlogCard = ({ item }: BlogCardProps) => {
  const router = useRouter();
  const onDeleteHandler = async (item: BlogType) => {
    try {
      const statusResponse = await BlogService.deleteBlog(item._id);
      if (statusResponse === 200) {
        router.replace(router.asPath);
      }
    } catch (error) {
      const result = error as Error;
      console.log(result);
    }
  };
  return (
    <div className="col" key={item._id}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.excerpt}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => router.push(`/${item.slug}`)}
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteHandler(item)}
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Delete
              </button>
            </div>
            <small className="text-body-secondary">
              {calculateEstimatedTimeToRead(item.description)}mins
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
