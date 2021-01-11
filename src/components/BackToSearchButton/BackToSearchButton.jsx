import { withRouter } from 'react-router';

const BackToSearchButton = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };
  return (
    <button className="unit" type="button" onClick={goBack}>
      <i className="icon ion-md-arrow-back" />
    </button>
  );
};

export default withRouter(BackToSearchButton);
