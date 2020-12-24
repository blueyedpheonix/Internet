import React from 'react'
import './styles/App.scss'
import Player from './components/Player'
import Song from './components/Song'
import Data from './components/Util'

function App() {

  const [Songs, setSongs] = React.useState(Data())
  const [CurrentSong, setCurrentSong] = React.useState(Songs[0])

  return (
    <div className="App">
      <Song CurrentSong={CurrentSong}/>
      <Player/>
    </div>
  );
}

export default App;
