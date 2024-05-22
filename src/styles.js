import zIndex from "@mui/material/styles/zIndex";
import colors from "./colors";

const styles = {
  html: {
    margin: 0,
    padding: 0,
  },
  body: {
    margin: 0,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI, 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  code: {
    fontFamily:
      "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
  //headers
  header: {
    backgroundColor: `${colors.tertiary}60`,
    position: "absolute",
    zIndex: 3,
    height: "10vh",
    paddingX: 5,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  headerLogo: {
    textAlign: "left",
  },
  headerText: {
    textAlign: "left",
  },

  //container
  container: {
    paddingX: 5,
    backgroundColor: colors.light,
  },

  //footer
  footerContainer: {
    display: "flex",
    height: "30vh",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    // backgroundColor: `${colors.tertiary}60`,
  },
  linkFooterStyle: {
    display: "flex",
  },
  //contact
  contactContainer: {
    display: "flex",
    flexDirection: "column",
  },
};

export default styles;
