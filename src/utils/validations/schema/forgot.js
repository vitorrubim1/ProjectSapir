import * as Yup from 'yup';

export const ForgotSchema = Yup.object({
  email: Yup.string().required("Campo obrigatório"),
})