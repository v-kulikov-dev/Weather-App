export const dateBuild = () => {
  let date = String(new window.Date());
  date = date.slice(3, 15);
  return date;
};
