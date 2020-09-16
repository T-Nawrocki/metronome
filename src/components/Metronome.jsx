import React, { Component } from 'react';
import './Metronome.css';

class Metronome extends Component {
  state = { 
    sound: null,
    bpm: 120,
    playing: false,
    interval: null
  }

  bpmAsMilliseconds = () => 60000/this.state.bpm;

  beep = () => this.state.sound.play();

  startMetronome = () => {
    this.setState({ playing: true });
    this.setState({interval: setInterval(this.beep, this.bpmAsMilliseconds())});
  };

  stopMetronome = () => {
    this.setState({ playing: false })
    clearInterval(this.state.interval);
  }

  handleClick = () => {
    this.state.playing ? this.stopMetronome() : this.startMetronome();
  }

  handleBpmChange = e => {
    const bpm = e.target.value;
    const metronomeWasPlaying = this.state.playing;

    this.stopMetronome();
    this.setState({ bpm }, () => {
      if (metronomeWasPlaying) this.startMetronome();
    });
  };

  componentDidMount() {
    this.setState({ sound: new Audio(this.props.sound) })
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.sound !== prevProps.sound) this.setState({ sound: new Audio(this.props.sound) })
  }

  render() { 
    return ( 
      <>
        <input type="range"
               name="bpm-slider" 
               id="bpm-slider" 
               min="60" 
               max="180"
               value={this.state.bpm}
               onChange={this.handleBpmChange} />

        <h6>{this.state.bpm} BPM</h6>
        
    <button onClick={this.handleClick}>{this.state.playing ? 'Stop' : 'Start'}</button>
      </>
    );
  }
}
 
export default Metronome;
