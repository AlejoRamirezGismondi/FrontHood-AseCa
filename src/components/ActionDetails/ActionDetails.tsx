import React, {useState} from 'react';
import Chart from "../Chart/Chart";
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Button, IconButton} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DetailTable from "../DetailTable/DetailTable";
import {Stock} from "../Models/Stock";
import StockExchange from "../Exchange/StockExchange";
import {Receipt} from "../Models/Receipt";
import ReceiptView from "../Exchange/ReceiptView";
import {put} from "../http";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appbar: {
    background: "rgb(0, 200, 0)"
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    background: "#fafafa"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    background: "lightgray"
  },
  buyButton: {

  },
  fixedHeight: {
    height: 240,
  },
}));

const ActionDetails = () => {
  const classes = useStyles();
  const [input, setInput] = useState<string>();
  const [stock, setStock] = useState<Stock>({
    name: 'the Company X',
    symbol:'HOL',
    marketOpen:new Date(Date.now()),
    marketClose:new Date(Date.now()),
    type: 'type',
    region: 'LA',
    timezone: 'UTC-3',
    currency: 'USD',
  });

  const removeDollarSign = (value) => (value[0] === '$' ? value.slice(1) : value)
  const getReturnValue = (value) => (value === '' ? '' : `$${value}`)

  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [openReceiptView, setOpenReceiptView] = useState<boolean>(false)
  const [receipt, setReceipt] = useState<Receipt>({id:0, userId: 0, stockBought:0, stockSymbol:'', price:0})

  const handleOpenDrawer = () => {
    setOpenDrawer(true)
  }


  const handleBuy = (price: number, amount: number, didBuy:boolean) => {
    setOpenDrawer(false)
    if(didBuy) {
      put('1/' + stock.symbol + '/' + amount, {}).then(() => {
        setReceipt({id: 2, userId: 1, price: price, stockBought: amount, stockSymbol: stock.symbol})
        setOpenReceiptView(true);
      }).catch(err => console.log(err))
    }
  }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="absolute" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            href={"/"}
            data-testid={"return-button-id"}
          >
            <ChevronLeftIcon/>
          </IconButton>
          <Typography data-testid={"action-name-id"} component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Nombre de la accion
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <h2 data-testid={"actual-price-id"}>Precio Actual:</h2>
                <Button variant="contained" color="primary" onClick={handleOpenDrawer}>
                  Comprar
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>Detalles</h2>
                <DetailTable />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>Calificaciones de Analistas</h2>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
      <StockExchange stock={stock} open={openDrawer} onClose={handleBuy}/>
      <ReceiptView receipt={receipt} open={openReceiptView} onClose={() => setOpenReceiptView(false)}/>
    </div>
  );
}

export default ActionDetails;
