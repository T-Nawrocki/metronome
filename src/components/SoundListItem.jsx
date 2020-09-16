import React from 'react';

const SoundListItem = props => {
  const handleClick = () => props.handleSoundSelect(props.sound.sound);
  
  return ( 
    <button className="list-item-btn" onClick={handleClick}>{props.sound.name}</button>
  );
}
 
export default SoundListItem;