import React, { ChangeEvent, FormEvent, useState } from "react";
import { ErrorType, FormProps, FormValues } from "./form.props";
import { useRouter } from "next/router";

const Form = ({ onSubmit, values, sectionTitle }: FormProps) => {
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
    try {
      const response = await onSubmit(formValue);
      router.push("/");
    } catch (err) {
      const error = err as ErrorType;
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <h4 className="text-center">{sectionTitle}</h4>
      <main className="form-signin w-50 text-black m-auto">
        <form onSubmit={submitHandler}>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Title"
              name="title"
              value={values?.title}
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
              value={values?.excerpt}
              onChange={onChange}
            />
            <label htmlFor="floatingInput"> Excerpt</label>
          </div>
          <div className="form-floating">
            <textarea
              name="description"
              value={values?.description}
              className="form-control"
              id="floatingTextarea2"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              onChange={onChange}
            />
            <label htmlFor="floatingInput"> Title</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Create
          </button>
        </form>
      </main>
    </div>
  );
};

export default Form;
