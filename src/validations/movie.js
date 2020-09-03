import * as Yup from "yup";

const movie = Yup.object({
  title: Yup.string().required(),
  release: Yup.number().required(),
  format: Yup.string().required(),
  stars: Yup.string().required()
});

export default movie;