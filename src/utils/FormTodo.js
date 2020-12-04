import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Card,
  TextareaAutosize,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const FormTodo = () => {
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid item spacing={1} xs={12} sm={6} md={4} lg={3}>
      <Box m={3} border={0}>
        <Card className={classes.root}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Titulo" />
            <InputLabel id="description">Descripción</InputLabel>
            <TextareaAutosize
              labelId="description"
              rowsMax={4}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue=""
            />

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Categoría
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={category}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Ninguna</em>
                </MenuItem>
                <MenuItem value={10}>Alta</MenuItem>
                <MenuItem value={20}>Media</MenuItem>
                <MenuItem value={30}>Baja</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" fullWidth color="primary">
              Cargar
            </Button>
          </form>
        </Card>
      </Box>
    </Grid>
  );
};

export default FormTodo;
