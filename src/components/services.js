import keys from '../helpers/keys';

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
  image: keys.IMAGES_URL,
};

export const getCurrentWeatherData = (query) => {
  let url;
  if (typeof query === 'object') {
    url = `${api.base}weather?lat=${query.lat}&lon=${query.lon}&units=metric&APPID=${api.key}`;
  } else {
    url = `${api.base}weather?q=${query.trim()}&units=metric&APPID=${api.key}`;
  }
  return fetch(url).then((res) => res.json());
};

export const getAllWeatherData = (coord) => {
  return fetch(
    `${api.base}onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely&units=metric&APPID=${api.key}`,
  ).then((res) => res.json());
};

export const getAirPollution = (lat, lon) => {
  return fetch(
    `${api.base}air_pollution?lat=${lat}&lon=${lon}&appid=${api.key}`,
  ).then((res) => res.json());
};

export const getImages = (logo) => {
  return `${api.image}${logo}@2x.png`;
};
