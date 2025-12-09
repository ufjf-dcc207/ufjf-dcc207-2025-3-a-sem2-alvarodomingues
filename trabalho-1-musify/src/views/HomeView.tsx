import React from 'react';
import PlaylistCard from '../components/PlaylistCard';
import { playlists } from '../data'; 

// Mudamos a interface para receber o ID
interface HomeViewProps {
  onOpenPlaylist: (id: number) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onOpenPlaylist }) => {
  return (
    <main className="home-view">
      <h2>Sua Biblioteca</h2>
      <div className="playlists-grid">
        {playlists.map((playlist) => (
          <PlaylistCard 
            key={playlist.id} 
            playlist={playlist} 
            // Agora passamos o ID para abrir a lista
            onClick={() => onOpenPlaylist(playlist.id)}
          />
        ))}
      </div>
    </main>
  );
};

export default HomeView;