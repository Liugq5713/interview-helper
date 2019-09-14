
import React from 'react';
import BtnToRecord from 'components/BtnToRecord'
import CardInterview from 'components/CardInterview'
import { commonQuestions } from 'constants/questions'


class RecordingAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      audios: [],
      chunks: [],
      cnt: 0,
      Questions: [...commonQuestions]
    };
  }

  async componentDidMount() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    this.mediaRecorder = new MediaRecorder(stream);
    this.chunks = []
    this.setState({ cnt: this.state.cnt + 1 })
    // listen for data from media recorder
    this.mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        this.chunks.push(e.data);

      }
    };
  }

  startRecording = (e) => {
    e.preventDefault();
    this.chunks = []
    this.mediaRecorder.start(10);
    this.setState({ recording: true });
  }

  stopRecording = (e) => {
    e.preventDefault();
    this.mediaRecorder.stop();
    this.setState({ recording: false });
    this.saveAudio();
    setTimeout(() => {
      this.setState((state) => {
        let cnt
        if (state.cnt < this.state.Questions.length) {
          cnt = state.cnt + 1
        }
        return { cnt }
      })
    }, 100)
  }

  saveAudio = () => {
    const blob = new Blob(this.chunks, { 'type': 'video/webm' });
    const videoStream = URL.createObjectURL(blob);
    const audios = this.state.audios.concat([videoStream]);
    this.setState({ audios });
  }

  deleteAudio = (audioURL) => {
    console.log('audioURL', audioURL)
    const audios = this.state.audios.filter(a => a !== audioURL);
    this.setState({ audios });
  }

  render() {
    const { recording, audios, cnt, Questions } = this.state;

    return (
      <div className="camera">
        <div>
          {
            [...Array(cnt)].map((video, i) => (
              <div className='px-1 py-2' key={`audio_${i}`}>
                <CardInterview title={Questions[i].q}>
                  {audios[i] && <video controls style={{ width: '100%' }} src={audios[i]} ></video>}
                </CardInterview>
              </div>
            ))
          }
        </div>

        <BtnToRecord recording={recording} handleRecord={recording ? this.stopRecording : this.startRecording} onClick={e => this.startRecording(e)} />
      </div>
    );
  }
}
export default RecordingAPI
