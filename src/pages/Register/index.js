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
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

import { Link } from "react-router-dom";

import Header from "../../components/Header";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "70%",
    height: "85%",
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
  button:{
    backgroundColor: "rgb(0, 52, 81)",
    color: "rgb(255, 255, 255)",
    borderBottom: "3px solid rgb(0, 36, 56)",
    fontWeight: "bold"
  },
  link: {
    background: "none",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "400",
    color: "rgb(0, 52, 81)",
  }
});

function Register() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />

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
                  <Paper elevation={1}>
                    <Typography>Teste</Typography>
                    <Typography>Teste</Typography>
                    <Typography>Teste</Typography>
                    <Typography>Teste</Typography>
                  </Paper>
                </Grid>
                <Grid item xs>
                  <TextField
                    label="Cidade"
                    variant="filled"
                    required
                    className={classes.input}
                    style={{ marginBottom: "15px" }}
                  />
                  <TextField
                    label="Cidade"
                    variant="filled"
                    required
                    className={classes.input}
                  />

                  <Box display="flex" justifyContent="space-between" mt={3}>
                    <Link to="/login" className={classes.link}>Já tenho cadastro</Link>
                    <Button type="submit" className={classes.button}>Cadastrar</Button>
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
