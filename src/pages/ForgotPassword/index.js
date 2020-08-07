import * as React from "react";

import {
  Box,
  Typography,
  Grid,
  TextField,
  Divider,
  Button,
} from "@material-ui/core";

import { useStyles } from "../pageStyles";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const classes = useStyles();

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

          <form noValidate autoComplete="off">
            <Box flexGrow={1} mt={6}>
              <Grid container spacing={3}>
                <Grid item md>
                  <Typography className={classes.link}>
                    Confirme seu e-mail
                  </Typography>
                  <TextField
                    label="Email"
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
          </form>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default ForgotPassword;
