import React from 'react';
import {Line} from 'react-chartjs-2';
import {Price, StockDetails} from "../Models/StockDetails";

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

const Chart = (props: Props) => {

  const labels = props.details.dailyPrices.map(p => {
    return p.day;
  });

  const prices = props.details.dailyPrices.map(p => {
    return p.price;
  });

  const data = {
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
  };

  return (
    <>
      <div className='header'>
        <h1 className='title'>Line Chart</h1>
      </div>
      <Line data={data} options={options} type={'segment'}/>
    </>
  );
};

export default Chart;
