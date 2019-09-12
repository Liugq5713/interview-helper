
import React from 'react';

class RecordingAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      audios: [],
    };
  }

  async componentDidMount() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    this.audio.srcObject = stream
    this.audio.play();
    this.mediaRecorder = new MediaRecorder(stream);
    this.chunks = [];
    // listen for data from media recorder
    this.mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        this.chunks.push(e.data);
      }
    };
  }

  startRecording(e) {
    e.preventDefault();
    this.chunks = [];
    this.mediaRecorder.start(10);
    this.setState({ recording: true });
  }

  stopRecording(e) {
    e.preventDefault();
    this.mediaRecorder.stop();
    this.setState({ recording: false });
    this.saveAudio();
  }

  saveAudio() {
    const blob = new Blob(this.chunks, { 'type': 'video/webm' });
    const videoStream = URL.createObjectURL(blob);
    const audios = this.state.audios.concat([videoStream]);
    console.log(audios, 's')
    this.setState({ audios });
  }

  deleteAudio(audioURL) {
    // filter out current videoURL from the list of saved videos
    const audios = this.state.audios.filter(a => a !== audioURL);
    this.setState({ audios });
  }

  render() {
    const { recording, audios } = this.state;

    return (
      <div className="camera">
        <video
          style={{ width: 400 }}
          ref={a => {
            this.audio = a;
          }}>
          <p>Audio stream not available. </p>
        </video>
        <div>
          {!recording && <button onClick={e => this.startRecording(e)}>Record</button>}
          {recording && <button onClick={e => this.stopRecording(e)}>Stop</button>}
        </div>
        <div>
          <h3>Recorded videos:</h3>
          {audios.map((video, i) => (
            <div key={`audio_${i}`}>
              <video controls style={{ width: 500 }} src={video} ></video>
              <div>
                <button onClick={() => this.deleteAudio(video)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default RecordingAPI
