import s from "./Button.module.css";
import PropTypes from "prop-types";
function Button({ buttonName }) {
  return (
    <button className={s.button} type="submit">
      <span >{buttonName}</span>
    </button>
  );
}
Button.defaultProps = {
  buttonName: PropTypes.string.isRequired,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
