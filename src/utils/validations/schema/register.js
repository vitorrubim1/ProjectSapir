import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  first_name: Yup.string().required("Campo obrigatório"),
  last_name: Yup.string().required("Campo obrigatório"),
  cpf: Yup.string()
    .matches(/(\d){3}\.(\d){3}\.(\d){3}-(\d){2}/, "Messages.CPF")
    .required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  telefone: Yup.number().required("Campo obrigatório"),
  nome_empresa: Yup.string().required("Campo obrigatório"),

  cnpj: Yup.number()
    .required("Campo obrigatório")
    // .matches(/(\d){2}\.(\d){3}\.(\d){3}\/(\d){3}\\-(\d){2}/, "CPF inválido")
    .min(14, "O CNPJ não contém a quantidade certa de caracter"),
  cep: Yup.number().required("Campo obrigatório"),
  endereco: Yup.string().required("Campo obrigatório"),
  numero: Yup.number().required("Campo obrigatório"),
  estado: Yup.string().required("Campo obrigatório"),
  cidade: Yup.string().required("Campo obrigatório"),
  password: Yup.string()
    .min(8, "A senha precisa ter pelo menos 8 caracters")
    .required("Campo obrigatório")
    .matches(/(?=.*[\W_])/, "A senha precisa conter um caracter especial")
    .matches(/(?=.*[\d])/, "A senha precisa conter um número")
    .matches(/(?=.*[A-Z])/, "A senha precisa conter uma letra maíuscula"),
  password_confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "As senhas não coincidem")
    .required("Campo obrigatório"),
});
