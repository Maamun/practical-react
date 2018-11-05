import React from 'react'

export const Body = props => {
  return (<>
    <div className="app-intro">{props.text}</div>
    <div className="app-intro">{props.text2}</div>
    <div className="app-intro">{props.myFunc(9, 2)}</div>
  </>);
};