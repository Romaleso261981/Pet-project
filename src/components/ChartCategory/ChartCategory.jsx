import s from './ChartCategory.module.scss';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

export default function ChartCategory({ expenses, incomes, curCategory }) {
  ChartJS.register(
    CategoryScale,
    ChartDataLabels,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    indexAxis: 'x',
    responsive: true,
    layout: {
      padding: {
        top: 30,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        color: '#52555F',
        anchor: 'end',
        align: 'end',
        offset: 5,
        font: {
          size: '12',
        },
        formatter: value =>
          `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} UAH`,
      },
    },

    minBarThickness: 15,
    maxBarThickness: 20,

    scales: {
      x: {
        display: true,
        grid: {
          color: 'transparent',
          borderColor: 'transparent',
          tickColor: 'transparent',
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          color: '#F5F6FB',
          borderColor: 'transparent',
          tickColor: 'transparent',
          lineWidth: 2,
        },
      },
    },
  };

  const labels = Object.keys(curCategory.data).filter(el => el !== 'total');

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: labels.map(element => curCategory.data[element]),
        backgroundColor: ['#FF751D', '#FED9BF', '#FED9BF'],
        borderRadius: 10,
        maxBarThickness: 38,
      },
    ],
  };

  return (
    <div className={s.backgroundChartCategory}>
      <Bar className={s.canvas} options={options} data={data} />
    </div>
  );
}
