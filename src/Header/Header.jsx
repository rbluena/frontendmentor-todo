import moonIcon from "../assets/images/icon-moon.svg";
import checkBox from "../assets/images/icon-check.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="brand-wrapper">
          <div className="brand-logo">ToDo</div>
          <button className="btn-switcher">
            <img src={moonIcon} alt="" />
          </button>
        </div>

        <div className="input-wrapper">
          <div className="checkbox-wrapper" />
          <input type="text" name="" id="" placeholder="Create new todo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
