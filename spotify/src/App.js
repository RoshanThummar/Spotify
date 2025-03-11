import React, { useContext } from 'react'
import Slidbar from './component/Slidbar'
import Player from './component/Player'
import Display from './component/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  const {audioRef,track} = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Slidbar />
        <Display />
      </div>
      <Player /> 
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App 