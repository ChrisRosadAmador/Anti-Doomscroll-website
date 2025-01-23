//import PropTypes from "prop-types";

function Button(props: any) {
  return (
    <button
      className={
        props.color +
        " " +
        props.textColor +
        " font-mono w-36 h-16 rounded-2xl shadow-none transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-950 hover:border-black hover:border-2"
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
