//import PropTypes from "prop-types";

function Button(props: any) {
  return (
    <button
      className={
        props.color + " " + props.textColor + " font-mono w-36 h-16 rounded-2xl"
      }
      onClick={props.ClickFunc}
    >
      {props.text}
    </button>
  );
}
/*
Button.proptypes = {
  color: PropTypes.string,
  ClickFunc: PropTypes.func,
  text: PropTypes.string,
  textColor: PropTypes.string,
};
*/
export default Button;
