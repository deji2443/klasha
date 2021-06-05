import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#F5F5F5",
    color: "#2A2A2A",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#fff",
    },
  },
}))(TableRow);

function createData(productId, source, Klashadate, amount) {
  return { productId, source, Klashadate, amount };
}

let amount = "$1,200";
let klashaDate = "25th November, 2020";
let source = "Vel pellentesque ornare";
let productId = "KLA12578DHQ";

const rows = [
  createData(`${productId}`, `${source}`, `${klashaDate}`, `${amount}`),
  createData(`${productId}`, `${source}`, `${klashaDate}`, `${amount}`),
  createData(`${productId}`, `${source}`, `${klashaDate}`, `${amount}`),
  createData(`${productId}`, `${source}`, `${klashaDate}`, `${amount}`),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function KlashaTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Payout ID</StyledTableCell>
            <StyledTableCell align="left">Source</StyledTableCell>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="left">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.productId}
              </StyledTableCell>
              <StyledTableCell align="left">{row.source}</StyledTableCell>
              <StyledTableCell align="left">{row.Klashadate}</StyledTableCell>
              <StyledTableCell align="left">{row.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
