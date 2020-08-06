import * as Yup from 'yup';

export const RegisterSchema = Yup.object({
  nome: Yup.string().required("Nome obrigatório"),
  sobrenome: Yup.string().required("Sobrenome obrigatório"),
  cpf:  
    Yup.string()
    .required("CPF obrigatório"),
    email: Yup.string().email("Email inválido").required("Email obrigatório"),
    telefone: Yup.string().required("Telefone obrigatório"),
    nomeEmpresa: Yup.string().required("Nome da empresa obrigatório"),
    cnpj: Yup.string().required("CNPJ obrigatório"),
    cep: Yup.string().required("CEP obrigatório"),
    endereco: Yup.string().required("Endereço obrigatório"),
    numero: Yup.string().required("Número obrigatório"),
    estado: Yup.string().required("Estado obrigatório"),
    cidade: Yup.string().required("Cidade obrigatória"),
})