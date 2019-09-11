import React, { useState, useEffect } from 'react';


function Foo() {
  const [recorder, setRecorder] = useState()
  const [btnText, setBtnText] = useState('点我录制')
  const requestAudioAccess = () => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
      setRecorder(new window.MediaRecorder(stream))
      // this.bindEvents();
      setTimeout(() => {
        console.log('recorder', recorder)
      })
      var video = document.querySelector('video');

      // video.srcObject = recorder;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    }, error => {
      alert('出错，请确保已允许浏览器获取录音权限');
    });
  }
  useEffect(() => {
    // Update the document title using the browser API
    requestAudioAccess()
  });

  const onStart = () => {
    recorder.start();
    setBtnText('结束录制')
  }
  const onStop = () => {
    setBtnText('点我录制')

    recorder.stop();
  }
  return (
    <div>

      <video></video>
      <div>hello world</div>
      <button onMouseDown={onStart} onMouseUp={onStop}>{btnText}</button>
    </div>
  )
}
export default Foo
