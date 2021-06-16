import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useParams } from "react-router-dom";
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
import StockExchange from "../Exchange/StockExchange";
import {Receipt} from "../Models/Receipt";
import ReceiptView from "../Exchange/ReceiptView";
import {get, put} from "../http";
import {StockDetails} from "../Models/StockDetails";
import ReviewTable from "../ReviewTable/ReviewTable";

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
  buyButton: {},
  fixedHeight: {
  },
  errDiv: {
    display: "flex",
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: "center",
    marginTop: '25%'
  },
  errText: {
    marginTop: '50%',
    marginLeft: 'auto'
  }
}));

const ActionDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const { name, symbol } = useParams();
  const [error, setError] = useState<boolean>(false);
  const [details, setDetails] = useState<StockDetails>({
    price: '1',
    open: '1',
    high: '1',
    low: '2',
    week52low: '2',
    week52high: '2',
    volume: '2',
    volumeAverage: '2',
    dailyPrices: [
      {
        day: 'hoy',
        price: '2'
      }
    ]
  });

  const [reviews, setReviews] = useState({ buy: '1', sell: '2', hold: '3' });

  useEffect(() => {
    get(symbol).catch(() => setError(true))
    get("stats/" + symbol).then(response => {
      setDetails(response);
    }).catch(err => {
      console.log(err)
    });
    get("qualifications").then(response => {
      setReviews(response);
    }).catch(err => {
      console.log(err)
    });
  }, []);

  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const [openReceiptView, setOpenReceiptView] = useState<boolean>(false)
  const [receipt, setReceipt] = useState<Receipt>({id: 0, userId: 0, stockBought: 0, stockSymbol: '', price: 0})

  const handleOpenDrawer = () => {
    setOpenDrawer(true)
  }

  const handleBuy = (price: number, amount: number, didBuy: boolean) => {
    setOpenDrawer(false)
    if (didBuy) {
      put('1/' + symbol + '/' + amount, {}).then(() => {
        setReceipt({id: 2, userId: 1, price: price, stockBought: amount, stockSymbol: symbol})
        setOpenReceiptView(true);
      }).catch(err => {
        console.log(err)
        history.push("/deposit")
      })
    }
  }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  if (!details) return (
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
          <Typography data-testid={"action-name-id"} component="h1" variant="h6" color="inherit" noWrap
                      className={classes.title}>
            RobinCopy
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.errDiv}>
        <Typography> Sorry, the information requested could not be retrieved. Please try again later </Typography>
      </div>
    </div>
  );

  return (
    <div>
      {error? <h1> Invalid Stock symbol</h1> :
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
              <Typography data-testid={"action-name-id"} component="h1" variant="h6" color="inherit" noWrap
                          className={classes.title}>
                Nombre de la accion: {name}
              </Typography>
            </Toolbar>
          </AppBar>
          <main className={classes.content}>
            <div className={classes.appBarSpacer}/>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                  <Paper className={fixedHeightPaper}>
                    <Chart details={details}/>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper className={fixedHeightPaper}>
                    <h2 data-testid={"actual-price-id"}>Precio Actual: {details.price}</h2>
                    <Button data-testid={"buying-button"} variant="contained" color="primary" onClick={handleOpenDrawer}>
                      Comprar
                    </Button>
                  </Paper>
                  <br></br>
                  <Paper className={classes.paper}>
                    <h2>Detalles</h2>
                    <DetailTable details={details} name={name}/>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <h2>Calificaciones de Analistas</h2>
                    <ReviewTable details={reviews} name={name}/>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </main>
          <StockExchange symbol={symbol} name={name} open={openDrawer} onClose={handleBuy}/>
          <ReceiptView receipt={receipt} open={openReceiptView} onClose={() => setOpenReceiptView(false)}/>
        </div>
      }
    </div>
  );
}

export default ActionDetails;
