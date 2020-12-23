import { useState, useEffect } from "react";
import moment from "moment";
import "./styles.scss";

const AlertItem = ({ alert }) => {
  const [period, setPeriod] = useState({});
  useEffect(() => {
    setPeriod({
      from: moment(alert.start * 1000).format("hh:mm a"),
      to: moment(alert.end * 1000).format("hh:mm a"),
    });
  }, [alert]);

  console.log("period", period);
  // console.log("alert", alert);

  return (
    <div className="sul-box-raised-3 alert-wrapper">
      <div className="sender">
        {alert.sender_name || "Unknown source"} says:
      </div>
      <div>-"{alert.description}"</div>
      <div className="period">
        from {period.from} to {period.to}
      </div>
    </div>
  );
};

export default AlertItem;
