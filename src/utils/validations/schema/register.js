import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
  nome: Yup.string().required("Campo obrigatório"),
  sobrenome: Yup.string().required("Campo obrigatório"),
  cpf:  
    Yup.string()
    .required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    telefone: Yup.string().required("Campo obrigatório"),
    nomeEmpresa: Yup.string().required("Campo obrigatório"),
    cnpj: Yup.string().required("Campo obrigatório"),
    cep: Yup.string().required("Campo obrigatório"),
    endereco: Yup.string().required("Campo obrigatório"),
    numero: Yup.string().required("Campo obrigatório"),
    estado: Yup.string().required("Campo obrigatório"),
    cidade: Yup.string().required("Campo obrigatório"),
})