import React from 'react'
const CardInterview = (props) => {
  return (
    <div className="card bg-warning">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
      </div>
      {props.children}
    </div>
  )
}
CardInterview.defaultProps = {
  title: '问题内容',
}
export default CardInterview


