import React from 'react';
import { PlaylistItem } from '../types'; // Certifique-se que o tipo bate ou use any temporariamente se der erro de tipo

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
    // Adicionamos o evento onClick aqui
    <div className="playlist-card" onClick={onClick}>
      <img src={playlist.capaUrl} alt={`Capa da playlist ${playlist.nome}`} className="playlist-cover" />
      <h3 className="playlist-title">{playlist.nome}</h3>
      <p className="playlist-description">{playlist.descricao}</p>
    </div>
  );
};

export default PlaylistCard;