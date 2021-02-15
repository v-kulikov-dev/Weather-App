import { changeMode } from '../../helpers/changeMode';

const Header = () => {
  return (
    <header className="sul-box-raised-2">
      <h1>Weather App.</h1>
      <input
        type="checkbox"
        className="sul-checkbox-type-2"
        onClick={(e) => changeMode(e)}
      />
    </header>
  );
};

export default Header;
