import * as React from "react";

import {
  Box,
  Typography,
  Grid,
  Divider,
  Button,

} from "@material-ui/core";

import { useFormik, FormikContext, Form, Field } from "formik";

import { TextField } from "formik-material-ui";
import { SchemaContato } from "../../utils/validations/schema/contato";

import { useStyles } from "./styles";

function Contato() {
  const classes = useStyles();

  const methods = useFormik({
    enableReinitialize: true,
    initialValues: {
      nome: "",
      email: "",
      estado: "",
      cidade: "",
      assunto: "",
      mensagem: "",
    },
    validationSchema: SchemaContato,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.content}>
          <Box display="flex" flexDirection="column">
            <Box mt={3}>
              <Typography className={classes.titlePrincipal}>
                Entre em contato
              </Typography>
              <Divider className={classes.dividerL} orientation="horizontal" />
            </Box>
          </Box>
          <FormikContext.Provider value={methods}>
            <Form>
              <Box flexGrow={1} mt={6}>
                <Grid container spacing={4}>
                  <Grid item xs>
                    <Field
                      component={TextField}
                      label="Nome"
                      name="nome"
                      required
                      variant="filled"
                      className={classes.input}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs>
                    <Field
                      component={TextField}
                      label="Email"
                      name="email"
                      required
                      variant="filled"
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs>
                    <Field
                      component={TextField}
                      label="Telefone"
                      name="telefone"
                      required
                      variant="filled"
                      className={classes.input}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs>
                    <Field
                      component={TextField}
                      label="Estado"
                      name="estado"
                      required
                      variant="filled"
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs>
                    <Field
                      component={TextField}
                      label="Cidade"
                      name="cidade"
                      required
                      variant="filled"
                      className={classes.input}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs>
                    <Field
                      component={TextField}
                      label="Assunto"
                      name="assunto"
                      required
                      variant="filled"
                      className={classes.input}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={4}>
                  <Grid item xs>
                    <Field
                      component={TextField}
                      label="Mensagem"
                      name="mensagem"
                      required
                      variant="filled"
                      className={classes.input}
                    />
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end" mt={2}>
                  <Button type="submit" className={classes.button}>
                    Enviar
                  </Button>
                </Box>
              </Box>
            </Form>
          </FormikContext.Provider>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Contato;
