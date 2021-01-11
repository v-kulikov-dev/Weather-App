const Header = () => {
  const changeMode = (e) => {
    if (!e.target.checked) {
      document.body.classList.replace('dark-mode', 'light-mode');
    } else {
      document.body.classList.replace('light-mode', 'dark-mode');
    }
  };

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
