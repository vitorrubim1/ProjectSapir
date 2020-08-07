import * as Yup from 'yup';

export const SchemaContato = Yup.object({
  nome: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  telefone: Yup.string().required("Campo obrigatório"),
  estado: Yup.string().required("Campo obrigatório"),
  cidade: Yup.string().required("Campo obrigatório"),
  assunto: Yup.string().required("Campo obrigatório"),
  mensagem: Yup.string().required("Campo obrigatório"),
})  