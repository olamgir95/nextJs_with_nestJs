import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ErrorType, FormProps, FormValues } from "./form.props";
import { useRouter } from "next/router";

const Form = ({ onSubmit, values, sectionTitle }: FormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string[]>([]);
  const [formValue, setFormValue] = useState<FormValues>({
    title: "",
    excerpt: "",
    description: "",
  });

  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(formValue);
      router.push("/");
    } catch (err) {
      const error = err as ErrorType;
      console.log(error);

      setLoading(false);
      if (error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError([error.message]);
      }
    }
  };

  const removeErrorItem = (item: string) => {
    setError(error.filter((err) => err != item));
  };

  useEffect(() => {
    setFormValue({
      title: values?.title,
      excerpt: values?.excerpt,
      description: values?.description,
    });
  }, [router.query.slug]);

  return (
    <div>
      <h4 className="text-center">{sectionTitle}</h4>
      <main className="form-signin w-50 text-black m-auto">
        {error.length &&
          error.map((err, index) => (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
              key={index}
            >
              <div>{err}</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => removeErrorItem(err)}
              ></button>
            </div>
          ))}
        <form onSubmit={submitHandler}>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Title"
              name="title"
              value={formValue.title}
              onChange={onChange}
            />
            <label htmlFor="floatingInput"> Title</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Excerpt"
              name="excerpt"
              value={formValue.excerpt}
              onChange={onChange}
            />
            <label htmlFor="floatingInput"> Excerpt</label>
          </div>
          <div className="form-floating">
            <textarea
              name="description"
              value={formValue.description}
              className="form-control"
              id="floatingTextarea2"
              placeholder="Leave a comment here"
              style={{ height: "200px" }}
              onChange={onChange}
            />
            <label htmlFor="floatingInput"> Description</label>
          </div>
          <button
            disabled={loading}
            className="btn btn-primary w-100 py-2 mt-2"
            type="submit"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Form;
