import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { UTCToTime } from '../../../helpers/datePicker';

import './styles.scss';

const LineChart = ({ weather }) => {
  const [newForecast, setNewForecast] = useState([]);

  useEffect(() => {
    setNewForecast(weather?.slice(0, 11));
  }, [weather]);

  const valueForTempChart = newForecast.map((el) => el.temp);
  const valueForFeelsLikeChart = newForecast.map((el) => el.feels_like);
  const labels = newForecast.map((el) => UTCToTime(el.dt, 'HH-mm'));

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'temperature',
        data: valueForTempChart,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'feels like',
        data: valueForFeelsLikeChart,
        fill: false,
        borderColor: '#742774',
        backgroundColor: '#742774',
      },
    ],
  };
  return (
    <div className="line-chart-wrapper">
      <Line data={data} />
    </div>
  );
};

export default LineChart;
