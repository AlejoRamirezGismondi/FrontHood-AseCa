import React from 'react';
import {Line} from 'react-chartjs-2';

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

const Chart = props => {

  const data = {
    labels: props.map((k, _) => k),
    datasets: [
      {
        label: 'Price',
        data: props.map((_, v) => v),
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
