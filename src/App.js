import React from 'react';
import './App.css';
import MetronomeContainer from "./containers/MetronomeContainer"

function App() {
  return (
    <div className="App">
      <h1 className="metronome-header">Metronome!</h1>
      <MetronomeContainer className="metronome-container"/>
    </div>
  );
}

export default App;
