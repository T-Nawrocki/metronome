import React, { Component } from 'react';
import Metronome from '../components/Metronome';
import SoundList from '../components/SoundList';
import high from '../audio/High Seiko SQ50.wav';
import low from '../audio/Low Seiko SQ50.wav';
import click from '../audio/Click1.wav';


class MetronomeContainer extends Component {
  state = {
    sounds: [
      {
        id: 1,
        name: "High",
        sound: high
      },
      {
        id: 2,
        name: "Low",
        sound: low
      },
      {
        id: 3,
        name: "Click",
        sound: click
      }
    ],
    selectedSound: high
  }

  handleSoundSelect = selectedSound => this.setState({ selectedSound });

  render() { 
    return (
      <>
        <Metronome sound={this.state.selectedSound} />
        <SoundList sounds={this.state.sounds} handleSoundSelect={this.handleSoundSelect}/>
      </>
    );
  }
}
 

export default MetronomeContainer;
