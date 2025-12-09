import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import HomeView from './views/HomeView';
import PlaylistDetail from './views/PlaylistDetail'; // Importe a nova view
import { currentTrack as defaultTrack } from './data';
import type { CurrentTrack } from './types';

const App = () => {
  // Estado da música tocando
  const [playingTrack, setPlayingTrack] = useState<CurrentTrack>(defaultTrack);
  
  // ESTADO DE NAVEGAÇÃO: 'home' ou 'playlist'
  const [currentView, setCurrentView] = useState<'home' | 'playlist'>('home');
  // ESTADO DA PLAYLIST SELECIONADA
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<number | null>(null);

  // Função chamada ao clicar em um Card na Home
  const handleOpenPlaylist = (id: number) => {
    setSelectedPlaylistId(id);
    setCurrentView('playlist');
  };

  // Função chamada ao clicar em "Voltar" na PlaylistDetail
  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedPlaylistId(null);
  };

  // Função chamada ao clicar em uma música da lista
  const handlePlayMusic = (track: CurrentTrack) => {
    setPlayingTrack(track);
  };

  return (
    <div className="spotify-layout">
      <Sidebar />
      <div className="main-content">
        
        {/* RENDERIZAÇÃO CONDICIONAL */}
        {currentView === 'home' ? (
          <HomeView onOpenPlaylist={handleOpenPlaylist} />
        ) : (
          selectedPlaylistId !== null && (
            <PlaylistDetail 
                playlistId={selectedPlaylistId} 
                onPlayTrack={handlePlayMusic}
                onBack={handleBackToHome}
            />
          )
        )}

      </div>
      <MusicPlayer track={playingTrack} />
    </div>
  );
};

export default App;