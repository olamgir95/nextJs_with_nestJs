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
            <div className="col" key={item._id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    <p style={{ verticalAlign: "inherit;" }}>
                      <p style={{ verticalAlign: "inherit;" }}>
                        {item.excerpt}
                      </p>
                    </p>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <p style={{ verticalAlign: "inherit;" }}>
                          <p style={{ verticalAlign: "inherit;" }}>taklif</p>
                        </p>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <p style={{ verticalAlign: "inherit;" }}>
                          <p style={{ verticalAlign: "inherit;" }}>tuzatish</p>
                        </p>
                      </button>
                    </div>
                    <small className="text-body-secondary">
                      <p style={{ verticalAlign: "inherit;" }}>
                        <p style={{ verticalAlign: "inherit;" }}>9 daqiqa</p>
                      </p>
                    </small>
                  </div>
                </div>
              </div>
            </div>
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
