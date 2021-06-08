import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {createStyles, withStyles} from "@material-ui/core";
import {Stock} from "../Models/Stock";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main
    },
  }),
)(TableRow);

type Props = {
  details: any,
  stock: Stock
}

const DetailTable = (props: Props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table" color={"black"}>
        <TableHead>
          <StyledTableRow>
            <TableCell>Price</TableCell>
            <TableCell align="right">Buy</TableCell>
            <TableCell align="right">Sell</TableCell>
            <TableCell align="right">Hold</TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={props.stock.name}>
            <TableCell component="th" scope="row">
              {props.stock.name}
            </TableCell>
            <TableCell align="right">{props.details.buy}</TableCell>
            <TableCell align="right">{props.details.sell}</TableCell>
            <TableCell align="right">{props.details.hold}</TableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DetailTable;
