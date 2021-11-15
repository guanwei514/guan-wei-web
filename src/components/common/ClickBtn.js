import React from 'react';

const ClickBtn = (props) => {

  return (
    <div onClick={props.onClick} className={`${props.type} click-btn`} style={{width:props.width,fontSize:props.fontSize || '16px'}}>
      {props.text}
    </div>
  )
}

export default ClickBtn;