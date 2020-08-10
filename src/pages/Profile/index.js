import * as React from "react";

import { Box, Typography, Grid, Divider, Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";

import { Field } from "formik";

import { Link } from "react-router-dom";

import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

import { useStyles } from "../pageStyles";

function Profile() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Box className={classes.content}>
          <Box display="flex" flexDirection="column">
            <Box mt={3}>
              <Typography className={classes.titlePrincipal}>
                Quero me cadastrar na Sapir
              </Typography>
              <Divider className={classes.dividerL} orientation="horizontal" />
            </Box>
          </Box>
          <Box flexGrow={1} mt={6}>
            <Grid container spacing={3}>
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
              <Grid item xs>
                <Field
                  component={TextField}
                  label="Sobrenome"
                  name="sobrenome"
                  required
                  variant="filled"
                  className={classes.input}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs>
                <Field
                  component={TextField}
                  label="CPF"
                  name="cpf"
                  required
                  variant="filled"
                  className={classes.input}
                />
              </Grid>
              <Grid item xs>
                <Field
                  component={TextField}
                  label="E-mail"
                  name="email"
                  type="email"
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

            <Grid container spacing={3}>
              <Grid item xs>
                <Field
                  component={TextField}
                  label="Nome da empresa"
                  name="nomeEmpresa"
                  required
                  variant="filled"
                  className={classes.input}
                />
              </Grid>

              <Grid item xs>
                <Field
                  component={TextField}
                  label="CNPJ"
                  name="cnpj"
                  required
                  variant="filled"
                  className={classes.input}
                />
              </Grid>
            </Grid>

            <Box display="flex" flexDirection="column">
              <Box mb={3} mt={3}>
                <Typography
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "bold",
                    color: "rgb(0, 52, 81)",
                  }}
                >
                  Endereço
                </Typography>
                <Divider
                  className={classes.dividerS}
                  orientation="horizontal"
                />
              </Box>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs>
                <Field
                  component={TextField}
                  label="CEP"
                  name="cep"
                  required
                  variant="filled"
                  className={classes.input}
                />
              </Grid>
              <Grid item xs>
                <Field
                  component={TextField}
                  label="Endereço"
                  name="endereco"
                  required
                  variant="filled"
                  className={classes.input}
                />
              </Grid>
              <Grid item xs>
                <Field
                  component={TextField}
                  label="Número"
                  name="numero"
                  required
                  variant="filled"
                  className={classes.input}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs>
                <Field
                  component={TextField}
                  label="Complemento"
                  name="complemento"
                  variant="filled"
                  className={classes.input}
                />
              </Grid>
              <Grid item xs>
                <Field
                  component={TextField}
                  label="Estado"
                  name="estado"
                  variant="filled"
                  required
                  className={classes.input}
                />
              </Grid>
              <Grid item xs>
                <Field
                  component={TextField}
                  label="Cidade"
                  name="cidade"
                  variant="filled"
                  required
                  className={classes.input}
                />
              </Grid>
            </Grid>
            <Box display="flex" flexDirection="column">
              <Box mb={3} mt={3}>
                <Typography
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "bold",
                    color: "rgb(0, 52, 81)",
                  }}
                >
                  Agora escolha sua senha
                </Typography>
                <Divider
                  className={classes.dividerS}
                  orientation="horizontal"
                />
              </Box>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs>
                <Box flex="50%" className={classes.dicaSenha} mb={10}>
                  <Typography variant="subtitle1" className={classes.link}>
                    <Box fontWeight={600} marginX={2} pt={4} pb={1}>
                      Dicas de senha
                    </Box>
                  </Typography>
                  <Box pb={4}>
                    <Box
                      display="flex"
                      alignItems="center"
                      marginX={1}
                      marginY={0}
                    >
                      <CheckCircleOutlineOutlinedIcon
                        fontSize="small"
                        color="disabled"
                      />
                      <Typography variant="subtitle1" className={classes.link}>
                        <Box pl={1}>Pelo menos 8 caracteres;</Box>
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      marginX={1}
                      marginY={0}
                    >
                      <CheckCircleOutlineOutlinedIcon
                        fontSize="small"
                        color="disabled"
                      />
                      <Typography variant="subtitle1" className={classes.link}>
                        <Box pl={1}>Pelo menos 1 caractere minúsculo;</Box>
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      marginX={1}
                      marginY={0}
                    >
                      <CheckCircleOutlineOutlinedIcon
                        fontSize="small"
                        color="disabled"
                      />
                      <Typography variant="subtitle1" className={classes.link}>
                        <Box pl={1}>Pelo menos 1 caractere maiúsculo.</Box>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs>
                <Field
                  component={TextField}
                  label="Senha"
                  type="password"
                  name="senha"
                  variant="filled"
                  border="none"
                  required
                  className={classes.input}
                  style={{ marginBottom: "15px" }}
                />
                <Field
                  component={TextField}
                  label="Confirme a senha"
                  type="password"
                  name="rsenha"
                  variant="filled"
                  required
                  className={classes.input}
                />

                <Box display="flex" justifyContent="space-between" mt={3}>
                  <Link to="/login" className={classes.link}>
                    Já tenho cadastro
                  </Link>
                  <Button type="submit" className={classes.button}>
                    Cadastrar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Profile;
