import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("ce champ est obligatoire")
    .min(1, "trop petit!")
    .max(50, "trop long!"),
  // email: Yup.string()
  //     .email("email invalide")
  //     .required("l'email est obligatoire"),
  // password: Yup.string()
  //     .required("Mot de passe est obligatoire")
  //  .matches(/([0-9])/, "Au moins un entier")
  //     .min(8, "Mot de passe doit être plus grand que 8 caractères")
  //     .max(50, "Mot de passe doit être plus petit que 50 caractères"),
  // confirmPassword: Yup.string()
  //     .oneOf(
  //         [Yup.ref("password"), null],
  //         "Le mot de passe de confirmation ne correspond pas"
  //     ),
  // acceptTerms: Yup.bool().oneOf(
  //     [true],
  //     "Accepter les conditions est obligatoire"
  // ),
});
