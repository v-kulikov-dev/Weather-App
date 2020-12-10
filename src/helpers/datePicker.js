import moment from "moment";

export const dateBuild = () => {
  let date = String(new window.Date());
  date = date.slice(3, 15);
  return date;
};

export const UTCToTime = (utc) => {
  return moment(utc * 1000).format("hh:mma");
};