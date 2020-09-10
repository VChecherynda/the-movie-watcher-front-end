import * as Yup from "yup";

import { checkStringForUniqueValues } from "@helpers/filter";

const currentYear = new Date().getFullYear();

const movie = Yup.object({
  title: Yup.string().required(),
  release: Yup.number()
    .typeError("Should be a number")
    .positive("Should be a positive number")
    .min(1850)
    .max(currentYear)
    .required(),
  format: Yup.string().required(),
  stars: Yup.string()
    .test("is-unique", "Value should be unique", value =>
      checkStringForUniqueValues(value, ",")
    )
    .required()
});

export default movie;
