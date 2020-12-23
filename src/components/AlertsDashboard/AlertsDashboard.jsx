import { Fragment } from "react";
import AlertItem from "../AlertItem";
import "./styles.scss";

const AlertsDashboard = ({ alerts }) => {
  return (
    <div className="alerts-wrapper">
      <h2>Alerts</h2>
      {alerts.map((alert, idx) => {
        return (
          <Fragment key={idx}>
            {alert.description && <AlertItem alert={alert} />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default AlertsDashboard;
