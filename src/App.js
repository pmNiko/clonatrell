import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme/themeConfig";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Paper } from "@material-ui/core";
import Nav from "./layouts/Nav";
import FormTodo from "./utils/FormTodo";
import Card from "./utils/CardTodo";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <Grid container wrap="wrap" spacing={1}>
          <FormTodo />
          <Card />
          <Card />
          <Card />
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
