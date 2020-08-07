import * as React from "react";

import { Link } from "react-router-dom";

import { Box, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import logoSaphir from "../../src/assets/logo.png";

const useStyles = makeStyles({
  link: {
    background: "none",
    textDecoration: "none",
    fontSize: "0.9rem",
    letterSpacing: "0.8px",
    color: "rgb(0, 52, 81)",
    fontWeight: "700"
  },
  container: {
    width: "100vw",
    height: "125px",
    zIndex: "10",
    position: "fixed",
    top: "0",
    backgroundColor: "#FFF",
    boxShadow: "rgba(0, 0, 0, 0.20) 1px 1px 10px",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Container>
        <Box display="flex" paddingTop={1.5} alignItems="center" mr={8}>
          <Box flex={1}>
            <Box clone ml={8} width={"176px"}>
              <img src={logoSaphir} alt="Logo Sapir" />
            </Box>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Button>
              <Link to="/contact" className={classes.link}>
                Contato
              </Link>
            </Button>
            <Button>
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Button>
            <Button>
              <Link to="/register" className={classes.link}>
                Cadastre-se
              </Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
