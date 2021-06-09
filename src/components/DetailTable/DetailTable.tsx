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
import {StockDetails} from "../Models/StockDetails";

const useStyles = makeStyles({
  table: {
  },
  cell: {
    padding: '10px'
  }
});

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main
    },
  }),
)(TableRow);

type Props = {
  details: StockDetails,
  name: string
}

const DetailTable = (props: Props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table" color={"black"}>
        <TableHead>
          <StyledTableRow>
            <TableCell className={classes.cell}>Category</TableCell>
            <TableCell className={classes.cell}>Price</TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <TableCell className={classes.cell}>Open</TableCell>
            <TableCell className={classes.cell}>{props.details.open}</TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell className={classes.cell}>High</TableCell>
            <TableCell className={classes.cell}>{props.details.high}</TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell className={classes.cell}>Low</TableCell>
            <TableCell className={classes.cell}>{props.details.low}</TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell className={classes.cell}>52 Week Low</TableCell>
            <TableCell className={classes.cell}>{props.details.week52low}</TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell className={classes.cell}>52 Week High</TableCell>
            <TableCell className={classes.cell}>{props.details.week52high}</TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell className={classes.cell}>Volume</TableCell>
            <TableCell className={classes.cell}>{props.details.volume}</TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell className={classes.cell}>Volume Average</TableCell>
            <TableCell className={classes.cell}>{props.details.volumeAverage}</TableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DetailTable;
