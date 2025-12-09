import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import HomeView from './views/HomeView';
import PlaylistDetail from './views/PlaylistDetail';
import { currentTrack as defaultTrack } from './data';
import type { CurrentTrack } from './types';

const App = () => {
  // --- ESTADOS DE REPRODUÇÃO ---
  const [playingTrack, setPlayingTrack] = useState<CurrentTrack>(defaultTrack);
  const [playlistQueue, setPlaylistQueue] = useState<CurrentTrack[]>([]); // A lista atual
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);  // Posição na lista

  // --- ESTADOS DE NAVEGAÇÃO ---
  const [currentView, setCurrentView] = useState<'home' | 'playlist'>('home');
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<number | null>(null);

  // --- LÓGICA DE TOCAR MÚSICA ---
  // Agora aceitamos a música clicada E a lista completa onde ela está
  const handlePlayMusic = (track: CurrentTrack, trackList: CurrentTrack[]) => {
    setPlayingTrack(track);
    setPlaylistQueue(trackList);
    // Descobre o índice da música clicada na lista
    const index = trackList.findIndex(t => t.titulo === track.titulo);
    setCurrentTrackIndex(index !== -1 ? index : 0);
  };

  // Lógica para "Próxima Música"
  const handleNextTrack = () => {
    if (playlistQueue.length === 0) return;

    // Calcula o próximo índice (se for o último, volta para o 0 - Loop)
    const nextIndex = (currentTrackIndex + 1) % playlistQueue.length;
    setCurrentTrackIndex(nextIndex);
    setPlayingTrack(playlistQueue[nextIndex]);
  };

  // Lógica para "Música Anterior"
  const handlePrevTrack = () => {
    if (playlistQueue.length === 0) return;

    // Calcula índice anterior (se for o primeiro, vai para o último)
    const prevIndex = (currentTrackIndex - 1 + playlistQueue.length) % playlistQueue.length;
    setCurrentTrackIndex(prevIndex);
    setPlayingTrack(playlistQueue[prevIndex]);
  };

  // --- LÓGICA DE NAVEGAÇÃO DE TELAS ---
  const handleOpenPlaylist = (id: number) => {
    setSelectedPlaylistId(id);
    setCurrentView('playlist');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedPlaylistId(null);
  };

  return (
    <div className="spotify-layout">
      <Sidebar />
      <div className="main-content">
        {currentView === 'home' ? (
          <HomeView onOpenPlaylist={handleOpenPlaylist} />
        ) : (
          selectedPlaylistId !== null && (
            <PlaylistDetail 
                playlistId={selectedPlaylistId} 
                onPlayTrack={handlePlayMusic} // Passamos a nova função
                onBack={handleBackToHome}
            />
          )
        )}
      </div>
      
      {/* Passamos as funções de controle para o Player */}
      <MusicPlayer 
        track={playingTrack} 
        onNext={handleNextTrack}
        onPrev={handlePrevTrack}
      />
    </div>
  );
};

export default App;