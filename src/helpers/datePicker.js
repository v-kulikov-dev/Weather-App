import moment from 'moment';

export const UTCToTime = (utc, format) => {
  return moment(utc * 1000).format(format);
};
