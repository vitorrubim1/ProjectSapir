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
    fontWeight: "700",
  }
});

function Header() {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Box display="flex" alignItems="center" mr={8}>
          <Box flex={1}>
            <Box clone ml={8} width={"176px"}>
              <img src={logoSaphir} alt="Logo Saphir" />
            </Box>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Button>
              <Link to="/contact" className={classes.link}>
                Contato
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
