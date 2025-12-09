import React from 'react';
import PlaylistCard from '../components/PlaylistCard';
import { playlists } from '../data'; 

//Interface recebe o ID
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
            onClick={() => onOpenPlaylist(playlist.id)}
          />
        ))}
      </div>
    </main>
  );
};

export default HomeView;