import * as Yup from 'yup';

export const SchemaContato = Yup.object({
  nome: Yup.string().required("Nome obrigatório"),
  email: Yup.string().email("Email inválido").required("Email obrigatório"),
  telefone: Yup.string().required("Telefone obrigatório"),
  estado: Yup.string().required("Estado obrigatório"),
  cidade: Yup.string().required("Cidade obrigatória"),
  assunto: Yup.string().required("Assunto obrigatório"),
  mensagem: Yup.string().required("Mensagem obrigatória"),
})  