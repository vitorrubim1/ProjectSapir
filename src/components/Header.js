import * as React from "react";

import { Box, Container, Button } from "@material-ui/core";

import logoSaphir from "../../src/assets/logo.png";

function Header() {
  return (
    <Box>
      <Container fixed>
        <Box display="flex" alignItems="center">
          <Box flex={1}>
            <Box clone ml={8} width={"180px"}>
              <img src={logoSaphir} alt="Logo Saphir" />
            </Box>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <Button variant="text">Contato</Button>
            <Button variant="text">Cadastre-se</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
