import * as React from "react";

import { Box, Typography, Grid, Divider, Button } from "@material-ui/core";

import { useFormik, FormikContext, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { TextField } from "formik-material-ui";
import { LoginSchema } from "../../utils/validations/schema/login";
import { login } from "../../services/ducks/User/actions";

import { useStyles } from "../pageStyles";
import { Link } from "react-router-dom";

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const methods = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(login(values));
    },
  });

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.content}>
          <Box display="flex" flexDirection="column">
            <Box mt={3}>
              <Typography className={classes.titlePrincipal}>Login</Typography>
              <Divider className={classes.dividerL} orientation="horizontal" />
            </Box>
          </Box>

          <FormikContext.Provider value={methods}>
            <Form>
              <Box flexGrow={1} mt={6}>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <Field
                      component={TextField}
                      name="email"
                      label="Login"
                      required
                      variant="filled"
                      className={classes.inputHalf}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <Field
                      component={TextField}
                      name="password"
                      label="Senha"
                      required
                      variant="filled"
                      className={classes.inputHalf}
                    />
                  </Grid>
                </Grid>

                <Box
                  width="45%"
                  display="flex"
                  justifyContent="space-between"
                  mt={2}
                >
                  <Box>
                    <Link to="/forgotPassword" className={classes.link}>
                      Esqueci minha senha
                    </Link>{" "}
                    <br />
                    <Link to="/register" className={classes.link}>
                      Não tem uma conta? Registre-se
                    </Link>
                  </Box>
                  <Button type="submit" className={classes.button}>
                    Entrar
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

export default Login;
