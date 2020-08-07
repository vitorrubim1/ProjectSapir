import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "70%",
    height: "100vh",
    paddingTop: "170px",
  },
  contentContact: {
    width: "70%",
    height: "100vh",
    paddingTop: "100px",
  },
  titlePrincipal: {
    color: "rgb(0, 52, 81)",
    fontWeight: "500",
    fontSize: "2.5rem",
  },
  inputHalf: {
    textAlign: "center",
    width: "45%",
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
