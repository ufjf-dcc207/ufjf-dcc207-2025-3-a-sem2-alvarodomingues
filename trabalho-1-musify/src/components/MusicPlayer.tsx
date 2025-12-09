import React, { useState } from 'react';
import { 
    IoPlaySkipBackSharp, 
    IoPlaySkipForwardSharp, 
    IoPlayCircle, 
    IoPauseCircle, // Importamos o ícone de Pause
    IoVolumeMedium, 
    IoShuffle, 
    IoRepeat 
} from 'react-icons/io5';
import { CurrentTrack } from '../types';

interface MusicPlayerProps {
    track: CurrentTrack; // Recebe os dados do App.tsx via props
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ track }) => {
    // ESTADO 2: Controle de Play/Pause (Booleano)
    const [isPlaying, setIsPlaying] = useState(false);
    
    // ESTADO 3: Volume (Número)
    const [volume, setVolume] = useState(70);

    const togglePlay = () => {
        setIsPlaying(!isPlaying); // Inverte o valor atual
    };

    return (
        <footer className="music-player">
            <div className="track-info">
                <img src={track.capaUrl} alt={track.album} className="track-cover" />
                <div className="track-details">
                    <span className="track-title">{track.titulo}</span>
                    <span className="track-artist">{track.artista}</span>
                </div>
            </div>
            
            <div className="player-controls">
                <div className="controls-buttons">
                    <IoShuffle className="control-icon" size={16} />
                    <IoPlaySkipBackSharp className="control-icon" size={24} />
                    
                    {/* Botão Dinâmico: Muda o ícone dependendo do estado */}
                    <div onClick={togglePlay}>
                        {isPlaying ? (
                            <IoPauseCircle className="play-button" size={40} />
                        ) : (
                            <IoPlayCircle className="play-button" size={40} />
                        )}
                    </div>

                    <IoPlaySkipForwardSharp className="control-icon" size={24} />
                    <IoRepeat className="control-icon" size={16} />
                </div>

                <div className="progress-bar-container">
                    <span className="time-display">0:30</span>
                    <div className="progress-bar">
                        {/* Exemplo de estilo condicional baseado em estado se quiséssemos animar */}
                        <div className="progress-filled" style={{ width: isPlaying ? '45%' : '25%' }}></div>
                    </div>
                    <span className="time-display">3:45</span>
                </div>
            </div>

            <div className="volume-controls">
                <IoVolumeMedium className="volume-icon" size={20} />
                <div className="volume-slider">
                     {/* A largura da barra de volume agora obedece a variável de estado */}
                     <div className="volume-filled" style={{ width: `${volume}%` }}></div>
                </div>
            </div>
        </footer>
    );
};

export default MusicPlayer;