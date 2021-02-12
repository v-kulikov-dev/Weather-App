import { useCallback } from 'react';
import { Doughnut } from 'react-chartjs-2';

import './styles.scss';

const DoughnutChart = ({ pollutions, airQualityIndex }) => {
  const getDataForChart = useCallback(() => {
    const values = [];
    const labels = [];
    pollutions?.map((el, i) => {
      if (i === 0) {
        values.push((+el.value / 10).toFixed(2));
        labels.push(`${el.title}/10`);
      } else {
        values.push(+el.value.toFixed(2));
        labels.push(el.title);
      }
      return { values, labels };
    });
    return { values, labels };
  }, [pollutions]);

  const data = {
    datasets: [
      {
        data: getDataForChart().values,
        backgroundColor: [
          '#8e7d9b',
          '#5cce35',
          '#d8c1d7',
          '#4a5eb0',
          '#21cae0',
          '#8b2bcb',
          '#fc3213',
          '#c27ae4',
        ],
      },
    ],
    labels: getDataForChart().labels,
  };

  const options = {
    legend: { display: false },
    cutoutPercentage: 70,
    elements: { center: { text: 'Red is 2/3 the total numbers' } },
  };
  return (
    <>
      <div>Click on the chart to see the values</div>
      <div className="chart">
        <div className="aqi-value">{airQualityIndex.aqi}</div>
        <Doughnut data={data} type="pie" options={options} />
      </div>
    </>
  );
};

export default DoughnutChart;
