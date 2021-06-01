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

const Chart = (props) => {

  const data = {
    labels: ['1', '2'],
    datasets: [
      {
        label: 'Price',
        data: ['1', '2'],
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
