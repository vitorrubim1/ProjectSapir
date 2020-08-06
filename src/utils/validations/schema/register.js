import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
  nome: Yup.string().required("Nome obrigatório"),
  sobrenome: Yup.string().required("Sobrenome obrigatório"),
  cpf:  
    Yup.string()
    .required("CPF obrigatório"),
  email: Yup.string().required("Email obrigatório"), 
})