import s from './ChartCategoryMobile.module.scss';
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

export default function ChartCategoryMobile({
  expenses,
  incomes,
  curCategory,
}) {
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
    indexAxis: 'y',
    responsive: true,
    layout: {
      padding: {
        right: 30,
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
        labels: {
          title: {
            align: 'top',
          },
        },
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
        ticks: {
          display: false,
        },
        display: true,
        grid: {
          color: 'transparent',
          borderColor: 'transparent',
          tickColor: 'transparent',
        },
      },
      y: {
        grid: {
          color: 'transparent',
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
        maxBarThickness: 15,
      },
    ],
  };

  return (
    <div className={s.backgroundChartCategoryMobile}>
      <Bar className={s.canvasMobile} options={options} data={data} />
    </div>
  );
}
