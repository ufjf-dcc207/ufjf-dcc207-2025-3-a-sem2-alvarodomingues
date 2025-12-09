import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import HomeView from './views/HomeView';
import { currentTrack as defaultTrack } from './data';
import { CurrentTrack } from './types';

const App = () => {
  // ESTADO 1: A música que está tocando agora
  // Música que veio do data.ts
  const [playingTrack, setPlayingTrack] = useState<CurrentTrack>(defaultTrack);

  // Função para trocar a música (passada para a HomeView)
  const handlePlayMusic = (playlistName: string, image: string) => {
    setPlayingTrack({
      titulo: playlistName, // Simplificação: usando nome da playlist como música
      artista: "Artista Variado",
      album: "Album Selecionado",
      capaUrl: image
    });
  };

  return (
    <div className="spotify-layout">
      <Sidebar />
      
      <div className="main-content">
        {/* Passamos a função de trocar música para a Home */}
        <HomeView onPlay={handlePlayMusic} />
      </div>
      
      {/* Passamos o ESTADO da música atual para o Player desenhar */}
      <MusicPlayer track={playingTrack} />
    </div>
  );
};

export default App;