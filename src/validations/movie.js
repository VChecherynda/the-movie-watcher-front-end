import * as Yup from "yup";

const movie = Yup.object({
  title: Yup.string().required(),
  release: Yup.number()
    .typeError("Should be a number")
    .positive("Should be a positive number")
    .min(1900)
    .required(),
  format: Yup.string().required(),
  stars: Yup.string().required()
});

export default movie;
