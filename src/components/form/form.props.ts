export interface FormProps {
  onSubmit: (formdata: FormValues) => any;
  values?: FormValues;
  sectionTitle: string;
}

export interface FormValues {
  title?: string;
  excerpt?: string;
  description?: string;
}

export interface ErrorType extends Error {
  response: {
    data: {
      message: string[];
    };
  };
}
