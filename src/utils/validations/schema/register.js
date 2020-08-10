import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
  first_name: Yup.string().required("Campo obrigatório"),
  last_name: Yup.string().required("Campo obrigatório"),
  cpf:  
    Yup.string()
    .required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    telefone: Yup.number().required("Campo obrigatório"),
    nome_empresa: Yup.string().required("Campo obrigatório"),
    cnpj: Yup.number().required("Campo obrigatório"),
    cep: Yup.number().required("Campo obrigatório"),
    endereco: Yup.string().required("Campo obrigatório"),
    numero: Yup.number().required("Campo obrigatório"),
    estado: Yup.string().required("Campo obrigatório"),
    cidade: Yup.string().required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
    password_confirm: Yup.string().required("Campo obrigatório"),
})