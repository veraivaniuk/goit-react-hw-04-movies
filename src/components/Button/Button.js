import s from "./Button.module.css";
import PropTypes from "prop-types";
function Button({ buttonName }) {
  return (
    <button className={s.button} type="button">
      <span className={s.button}>{buttonName}</span>
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
