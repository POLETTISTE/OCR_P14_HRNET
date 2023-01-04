import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("firstName required")
    .min(1, "first name must contain at least 1 character ")
    .max(50, "first name must contain 50 characters maximum"),

  lastName: Yup.string()
    .required("last name required")
    .min(1, "last name must contain at least 1 character ")
    .max(50, "last name must contain 50 characters maximum"),

  // dateOfBirth: Yup.string().required("date of birth required"),
  // .matches(
  //   /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
  //   "DD/MM/YYYY required 😜"
  // ),
  street: Yup.string()
    .required("street required")
    .min(1, "street must contain at least 1 character ")
    .max(50, "street must contain 50 characters maximum"),
  city: Yup.string()
    .required("ce champ est obligatoire")
    .min(1, "trop petit!")
    .max(50, "trop long!"),
  state: Yup.string().min(1, "Select a state").required("State required 😜"),

  zipCode: Yup.string()
    .required("ce champ est obligatoire")
    .min(6, "trop petit!")
    .max(6, "trop long!"),
  // startDate: Yup.string().required("date of start required"),
  department: Yup.string()
    .required("ce champ est obligatoire")
    .min(1, "trop petit!")
    .max(20, "trop long!"),
});
