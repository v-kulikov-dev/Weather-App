import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import BackToSearchButton from '../BackToSearchButton';
import PollutionItem from '../PollutionItem';
import { getAirPollution } from '../services';

import './styles.scss';

const AirPollution = ({ history, lat, lon }) => {
  const [pollutions, setPollutions] = useState([]);
  const [airQualityIndex, setAirQualityIndex] = useState({});

  useEffect(() => {
    if (!lat && !lon) {
      history.push('/');
    } else {
      getAirPollution(lat, lon).then((res) => {
        const data = res.list[0].components;
        const newPollutions = [
          { title: 'Carbon monoxide', value: data['co'] },
          { title: 'Nitrogen monoxide', value: data['nh3'] },
          { title: 'Nitrogen dioxide', value: data['no'] },
          { title: 'Ozone', value: data['no2'] },
          { title: 'Sulphur dioxide', value: data['o3'] },
          { title: 'Fine particles matter', value: data['pm2_5'] },
          { title: 'Coarse particulate matter', value: data['pm10'] },
          { title: 'Ammonia', value: data['so2'] },
        ];
        setPollutions(newPollutions);
        setAirQualityIndex(res.list[0].main);
      });
    }
  }, [history, lat, lon]);

  return (
    <>
      <div className="sul-box-raised-3 pollutions-dashboard">
        <h1>Air Pollution</h1>
        <BackToSearchButton />
      </div>
      <div className="sul-box-raised-3 pollutions-list">
        <div className="sul-box-raised-3 aqi">
          <div className="aqi__title">
            AQI - Air Quality Index. <br />
            Possible values: <br />
            1, 2, 3, 4, 5.
            <br /> Where 1 = Good,
            <br />2 = Fair,
            <br />3 = Moderate
            <br />4 = Poor
            <br />5 = Very Poor.
          </div>
          <div className="aqi__value">{airQualityIndex.aqi}</div>
        </div>
        {pollutions.length &&
          pollutions.map((pollution, index) => (
            <PollutionItem pollution={pollution} key={index} />
          ))}
      </div>
    </>
  );
};

export default withRouter(AirPollution);
