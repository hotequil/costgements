import { Link } from "react-router-dom";
import { isNullOrUndefined } from "../../helpers/validations";
import styles from "./Button.module.css"
import PropTypes from "prop-types";

export const layoutTypes = {
  BUTTON: "button",
  LINK: "link",
}

export const buttonTypes = {
  BUTTON: "button",
  SUBMIT: "submit",
}

export function Button({ click, to, isOutline, layoutType, buttonType, children }){
  if(layoutType !== layoutTypes.BUTTON && layoutType !== layoutTypes.LINK) layoutType = layoutTypes.BUTTON

  const isLayoutTypeButton = layoutType === layoutTypes.BUTTON
  const isLayoutTypeLink = layoutType === layoutTypes.LINK
  let classes = styles.button;

  if(isLayoutTypeButton && isNullOrUndefined(click) && buttonType === buttonTypes.BUTTON) console.error('set click, please')
  if(isLayoutTypeLink && isNullOrUndefined(to)) console.error('set to, please')
  if(isOutline) classes = `${classes} ${styles.buttonOutline}`;

  return (
    <>
      { isLayoutTypeButton && <button className={classes} type={buttonType} onClick={click}>{children}</button> }
      { isLayoutTypeLink && <Link className={classes} to={to}>{children}</Link> }
    </>
  )
}

Button.propTypes = {
  click: PropTypes.func,
  to: PropTypes.string,
  layoutType: PropTypes.string,
  buttonType: PropTypes.string,
  isOutline: PropTypes.bool,
}

Button.defaultProps = {
  layoutType: layoutTypes.BUTTON,
  buttonType: buttonTypes.BUTTON,
  isOutline: false,
}
