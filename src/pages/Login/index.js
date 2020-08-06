import * as React from "react";

import {
  Box,
  Typography,
  Grid,
  TextField,
  Divider,
  Button,
} from "@material-ui/core";

import { useStyles } from "./styles";
import { Link } from "react-router-dom";

function Login() {
  const classes = useStyles();

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

          <form noValidate autoComplete="off">
            <Box flexGrow={1} mt={6}>
              <Grid container spacing={3}>
                <Grid item md>
                  <TextField
                    label="Login"
                    required
                    variant="filled"
                    className={classes.input}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs>
                  <TextField
                    label="Senha"
                    required
                    variant="filled"
                    className={classes.input}
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
          </form>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Login;
