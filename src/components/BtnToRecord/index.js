import React from 'react'

const BtnToRecord = (props) => {
  return (
    <div style={{ width: '100%', maxWidth: '750px', position: 'fixed', bottom: '10px' }}>
      <button onClick={props.handleRecord} style={{ width: '98%' }} type="button" className="btn btn-light">
        {props.recording ?
          (<div>
            <span>正在回答</span>
            < i className="fas fa-microphone-alt" ></i >
          </div>
          )
          : (<div>
            <span>点击录制</span>
            < i className="fas fa-microphone" ></i >
          </div>
          )}
      </button>
    </div >
  )
}

export default BtnToRecord
