import * as React from "react";

import { Box, Typography, Grid, Divider, Button } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useFormik, FormikContext, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

import { forgot } from "../../services/ducks/Sapir/actions";

import { ForgotSchema } from "../../utils/validations/schema/forgot";

import { useStyles } from "../pageStyles";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const methods = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
    },
    validationSchema: ForgotSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(forgot(values));
    },
  });

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.content}>
          <Box display="flex" flexDirection="column">
            <Box mt={3}>
              <Typography className={classes.titlePrincipal}>
                Esqueci minha senha
              </Typography>
              <Divider className={classes.dividerL} orientation="horizontal" />
            </Box>
          </Box>

          <FormikContext.Provider value={methods}>
            <Form>
              <Box flexGrow={1} mt={6}>
                <Grid container spacing={3}>
                  <Grid item xs>
                    <Typography className={classes.link}>
                      Confirme seu e-mail
                    </Typography>
                    <Field
                      component={TextField}
                      label="Email"
                      name="email"
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
                    <Link to="/login" className={classes.link}>
                      Retornar para login
                    </Link>{" "}
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

export default ForgotPassword;
