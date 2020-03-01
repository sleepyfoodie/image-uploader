import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles({
  indent: { paddingLeft: "40px !important" },
  table: { minWidth: 650 },
  title: { color: "#3f51b5" }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const titles = ["Calories", "Fat(g)", "Carbs(g)", "Protein(g)"];

function App() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.title}>
              <Checkbox />
              Dessert (100g serving)
            </TableCell>
            {titles.map(title => (
              <TableCell className={classes.title} key={title} align="right">
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                className={row.protein > 5 ? classes.indent : null}
              >
                <Checkbox
                  //   indeterminate={numSelected > 0 && numSelected < rowCount}
                  //   checked={rowCount > 0 && numSelected === rowCount}
                  //   onChange={onSelectAllClick}
                  inputProps={{ "aria-label": "select all desserts" }}
                />
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
