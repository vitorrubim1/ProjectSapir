import * as Yup from 'yup';

export const SchemaContato = Yup.object({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  telefone: Yup.string().required("Campo obrigatório"),
  cidade: Yup.string().required("Campo obrigatório"),
  uf: Yup.string().required("Campo obrigatório"),
  subject: Yup.string().required("Campo obrigatório"),
  message: Yup.string().required("Campo obrigatório"),
})  