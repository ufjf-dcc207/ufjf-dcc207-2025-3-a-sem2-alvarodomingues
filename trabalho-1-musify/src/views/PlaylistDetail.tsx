import React from 'react';
import { playlistTracks, playlists } from '../data';
import type { CurrentTrack } from '../types';
import { IoTimeOutline, IoArrowBack } from 'react-icons/io5';

interface PlaylistDetailProps {
  playlistId: number;
  onPlayTrack: (track: CurrentTrack) => void;
  onBack: () => void;
}

const PlaylistDetail: React.FC<PlaylistDetailProps> = ({ playlistId, onPlayTrack, onBack }) => {
  // Encontra os dados da playlist (nome, capa, etc)
  const playlistInfo = playlists.find((p) => p.id === playlistId);
  // Busca as músicas dessa playlist no nosso "banco de dados"
  const tracks = playlistTracks[playlistId] || [];

  if (!playlistInfo) return <div>Playlist não encontrada</div>;

  return (
    <div className="playlist-detail">
      {/* Cabeçalho com Botão de Voltar */}
      <div className="detail-header">
        <button onClick={onBack} className="back-button">
            <IoArrowBack size={24} /> Voltar
        </button>
        <div className="header-content">
            <img src={playlistInfo.capaUrl} alt={playlistInfo.nome} className="header-cover" />
            <div className="header-text">
                <span className="header-type">PLAYLIST PÚBLICA</span>
                <h1 className="header-title">{playlistInfo.nome}</h1>
                <p className="header-desc">{playlistInfo.descricao}</p>
            </div>
        </div>
      </div>

      {/* Lista de Músicas */}
      <div className="tracks-list">
        <div className="tracks-header-row">
            <span>#</span>
            <span>Título</span>
            <span>Álbum</span>
            <IoTimeOutline />
        </div>
        
        {tracks.map((track, index) => (
            <div 
                key={index} 
                className="track-row" 
                onClick={() => onPlayTrack(track)}
            >
                <span className="track-index">{index + 1}</span>
                <div className="track-primary-info">
                    <span className="track-name">{track.titulo}</span>
                    <span className="track-artist-name">{track.artista}</span>
                </div>
                <span className="track-album-name">{track.album}</span>
                <span className="track-duration">3:45</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistDetail;