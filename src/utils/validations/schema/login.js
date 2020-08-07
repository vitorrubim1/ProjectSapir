import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  email: Yup.string().required("Campo obrigatório"),
  senha: Yup.string().required("Campo obrigatório"),
})