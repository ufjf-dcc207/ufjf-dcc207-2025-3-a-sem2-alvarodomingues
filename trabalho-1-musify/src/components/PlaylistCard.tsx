import React from 'react';
import type { PlaylistItem } from '../types'; 

// Atualizar interface para incluir o onClick e aceitar o formato correto da playlist
interface PlaylistCardProps {
  playlist: {
    id: number;
    nome: string;
    capaUrl: string;
    descricao: string;
  };
  onClick: () => void; // Nova prop
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, onClick }) => { 
  return (
    
    <div className="playlist-card" onClick={onClick}>
      <img src={playlist.capaUrl} alt={`Capa da playlist ${playlist.nome}`} className="playlist-cover" />
      <h3 className="playlist-title">{playlist.nome}</h3>
      <p className="playlist-description">{playlist.descricao}</p>
    </div>
  );
};

export default PlaylistCard;