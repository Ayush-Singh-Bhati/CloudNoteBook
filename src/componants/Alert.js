import React from 'react'
import alertCss from '../cssModules/alert.module.css'

function Alert(props) {
  const captalize = (word) => {
    if (word === "danger") {
      word = "error"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  // const background = {
  //   backgroundColor : 'props.alert.type'
  // }

  return (
    <div >
      {props.alert && <div className={`${props.alert.type} ${alertCss.alert}`}  role="alert">
        <strong>{captalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>}
    </div>

  )
}

export default Alert