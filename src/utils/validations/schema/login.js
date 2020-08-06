import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  email: Yup.string().required("Email obrigatório"),
  senha: Yup.string().required("Senha obrigatória"),
})