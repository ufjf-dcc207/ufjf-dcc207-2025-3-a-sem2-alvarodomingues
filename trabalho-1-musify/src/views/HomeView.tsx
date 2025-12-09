import React from 'react';
import PlaylistCard from '../components/PlaylistCard';
import { playlists } from '../data'; 

// Definimos que a HomeView recebe uma função "onPlay" como propriedade
interface HomeViewProps {
  onPlay: (name: string, image: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onPlay }) => {
  return (
    <main className="home-view">
      <h2>Sua Biblioteca (Clique para Tocar)</h2>
      <div className="playlists-grid">
        {playlists.map((playlist) => (
          <PlaylistCard 
            key={playlist.id} 
            playlist={playlist} 
            // Passamos a função de clique para o cartão
            onClick={() => onPlay(playlist.nome, playlist.capaUrl)}
          />
        ))}
      </div>
    </main>
  );
};

export default HomeView;