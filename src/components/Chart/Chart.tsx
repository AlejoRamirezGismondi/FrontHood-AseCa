import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {Price, StockDetails} from "../Models/StockDetails";
import {Button, ButtonGroup} from "@material-ui/core";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

type Props = {
  details: StockDetails
}

type Data = {
  labels: string[],
  datasets: {
    label: string,
    data: string[],
    fill: boolean,
    backgroundColor: string,
    borderColor: string
  }[]
}

const Chart = (props: Props) => {

  const labels = props.details.dailyPrices.map(p => {
    return p.day;
  });

  const prices = props.details.dailyPrices.map(p => {
    return p.price;
  });

  const labels1d = [labels[0], labels[0]];
  const labels1w = labels.slice(0, 7);
  const labels1m = labels.slice(0, 31);
  const labels3m = labels.slice(0, 99);
  const labels1y = labels.slice(0,364);

  const prices1d = [prices[0], prices[0]];
  const prices1w = prices.slice(0, 7);
  const prices1m = prices.slice(0, 31);
  const prices3m = prices.slice(0, 99);
  const prices1y = prices.slice(0,364);

  const [data, setData] = useState<Data>(
    {
      labels: labels,
      datasets: [
        {
          label: 'Price',
          data: prices,
          fill: false,
          backgroundColor: 'rgb(0, 200, 0)',
          borderColor: 'rgba(0, 200, 0, 0.2)',
        },
      ],
    }
  );

  useEffect(()=> {
    setData({
      labels: labels1d,
      datasets: [
        {
          label: 'Price',
          data: prices1d,
          fill: false,
          backgroundColor: 'rgb(0, 200, 0)',
          borderColor: 'rgba(0, 200, 0, 0.2)',
        },
      ],
    });
  }, [])

  return (
    <>
      <div className='header'>
        <h1 className='title'>Line Chart</h1>
      </div>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button onClick={() => {
          setData({
            labels: labels1d,
            datasets: [
              {
                label: 'Price',
                data: prices1d,
                fill: false,
                backgroundColor: 'rgb(0, 200, 0)',
                borderColor: 'rgba(0, 200, 0, 0.2)',
              },
            ],
          });
        }}>1D</Button>
        <Button onClick={() => {
          setData({
            labels: labels1w,
            datasets: [
              {
                label: 'Price',
                data: prices1w,
                fill: false,
                backgroundColor: 'rgb(0, 200, 0)',
                borderColor: 'rgba(0, 200, 0, 0.2)',
              },
            ],
          });
        }}>1W</Button>
        <Button onClick={() => {
          setData({
            labels: labels1m,
            datasets: [
              {
                label: 'Price',
                data: prices1m,
                fill: false,
                backgroundColor: 'rgb(0, 200, 0)',
                borderColor: 'rgba(0, 200, 0, 0.2)',
              },
            ],
          });
        }}>1M</Button>
        <Button onClick={() => {
          setData({
            labels: labels3m,
            datasets: [
              {
                label: 'Price',
                data: prices3m,
                fill: false,
                backgroundColor: 'rgb(0, 200, 0)',
                borderColor: 'rgba(0, 200, 0, 0.2)',
              },
            ],
          });
        }}>3M</Button>
        <Button onClick={() => {
          setData({
            labels: labels1y,
            datasets: [
              {
                label: 'Price',
                data: prices1y,
                fill: false,
                backgroundColor: 'rgb(0, 200, 0)',
                borderColor: 'rgba(0, 200, 0, 0.2)',
              },
            ],
          });
        }}>1Y</Button>
      </ButtonGroup>
      <Line data={data} options={options} type={'segment'}/>
    </>
  );
};

export default Chart;
