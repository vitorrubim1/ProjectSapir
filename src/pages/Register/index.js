import * as React from "react";

import {
  Box,
  Typography,
  Grid,
  TextField,
  Divider,
  Paper,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden",
  },
  content: {
    width: "70%",
    height: "100vh",
    paddingTop: "150px",
  },
  titlePrincipal: {
    color: "rgb(0, 52, 81)",
    fontWeight: "500",
    fontSize: "2.5rem",
  },
  input: {
    textAlign: "center",
    width: "100%",
  },
  dividerL: {
    backgroundColor: "#E9AF00",
    width: "75px",
    height: "3px",
    marginTop: "8px",
  },
  dividerS: {
    backgroundColor: "#E9AF00",
    width: "45px",
    height: "3px",
    marginTop: "8px",
  },
  button: {
    backgroundColor: "rgb(0, 52, 81)",
    color: "rgb(255, 255, 255)",
    borderBottom: "3px solid rgb(0, 36, 56)",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgb(0, 36, 56)",
    },
  },
  link: {
    background: "none",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "400",
    color: "rgb(0, 52, 81)",
  },
  dicaSenha: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #dadad1",
    borderRadius: "2px",
    marginRight: "16px",
    paddingLeft: "24px",
  },
});

function Register() {
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

          <form noValidate autoComplete="off">
            <Box flexGrow={1} mt={6}>
              <Grid container spacing={3}>
                <Grid item xs>
                  <TextField
                    label="Nome"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="Sobrenome"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs>
                  <TextField
                    label="CPF"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="E-mail"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="Telefone"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs>
                  <TextField
                    label="Nome da empresa"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>

                <Grid item xs>
                  <TextField
                    label="CNPJ"
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
                  <TextField
                    label="CEP"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="Endereço"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="Número"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs>
                  <TextField
                    label="Complemento"
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="Estado"
                    variant="filled"
                    required
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    label="Cidade"
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
                        <Typography
                          variant="subtitle1"
                          className={classes.link}
                        >
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
                        <Typography
                          variant="subtitle1"
                          className={classes.link}
                        >
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
                        <Typography
                          variant="subtitle1"
                          className={classes.link}
                        >
                          <Box pl={1}>Pelo menos 1 caractere maiúsculo.</Box>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs>
                  <TextField
                    label="Senha"
                    variant="filled"
                    required
                    className={classes.input}
                    style={{ marginBottom: "15px" }}
                  />
                  <TextField
                    label="Senha"
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
          </form>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Register;
