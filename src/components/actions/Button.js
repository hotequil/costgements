import { Link } from "react-router-dom";
import { isNullOrUndefined } from "../../helpers/validations";
import styles from "./Button.module.css"

export const layoutTypes = {
  BUTTON: "button",
  LINK: "link",
}

export const buttonTypes = {
  BUTTON: "button",
  SUBMIT: "submit",
}

export function Button({ children, click, to, layoutType = layoutTypes.BUTTON, buttonType = buttonTypes.BUTTON }){
  if(layoutType !== layoutTypes.BUTTON && layoutType !== layoutTypes.LINK) layoutType = layoutTypes.BUTTON

  const isLayoutTypeButton = layoutType === layoutTypes.BUTTON
  const isLayoutTypeLink = layoutType === layoutTypes.LINK

  if(isLayoutTypeButton && isNullOrUndefined(click)) console.error('set click, please')
  if(isLayoutTypeLink && isNullOrUndefined(to)) console.error('set to, please')

  return (
    <>
      { isLayoutTypeButton && <button className={styles.button} type={buttonType} onClick={click}>{children}</button> }
      { isLayoutTypeLink && <Link className={styles.button} to={to}>{children}</Link> }
    </>
  )
}
