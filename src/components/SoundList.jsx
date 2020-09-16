import React from 'react';
import SoundListItem from './SoundListItem';

const SoundList = props => {
  const soundNodes = props.sounds.map(sound => {
    return <SoundListItem key={sound.id} sound={sound} handleSoundSelect={props.handleSoundSelect} />
  });
  
  return (
    <>
      <h6>Choose a Sound!</h6>
      <ul className="sound-list">
        {soundNodes}
      </ul>
    </>
  );
}
 
export default SoundList;