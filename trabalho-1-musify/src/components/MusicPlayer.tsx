import React, { useState } from 'react';
import { 
    IoPlaySkipBackSharp, 
    IoPlaySkipForwardSharp, 
    IoPlayCircle, 
    IoPauseCircle, 
    IoVolumeMedium, 
    IoShuffle, 
    IoRepeat 
} from 'react-icons/io5';
import type { CurrentTrack } from '../types'; 

interface MusicPlayerProps {
    track: CurrentTrack;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ track }) => {
    // Estado do Play/Pause
    const [isPlaying, setIsPlaying] = useState(false);
    // Estado do Volume
    const [volume, setVolume] = useState(70);
    
    // NOVOS ESTADOS: Shuffle e Repeat
    const [isShuffle, setIsShuffle] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);

    // Funções para alternar os estados
    const togglePlay = () => setIsPlaying(!isPlaying);
    const toggleShuffle = () => setIsShuffle(!isShuffle);
    const toggleRepeat = () => setIsRepeat(!isRepeat);

    // Cor verde do Spotify para usar nos ícones ativos
    const activeColor = '#1db954';

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
                    {/* Botão Shuffle com condicional de cor */}
                    <IoShuffle 
                        className="control-icon" 
                        size={16} 
                        onClick={toggleShuffle}
                        style={{ color: isShuffle ? activeColor : undefined }} // undefined usa a cor do CSS padrão
                        title="Ordem Aleatória"
                    />

                    <IoPlaySkipBackSharp className="control-icon" size={24} />
                    
                    <div onClick={togglePlay}>
                        {isPlaying ? (
                            <IoPauseCircle className="play-button" size={40} />
                        ) : (
                            <IoPlayCircle className="play-button" size={40} />
                        )}
                    </div>

                    <IoPlaySkipForwardSharp className="control-icon" size={24} />
                    
                    {/* Botão Repeat com condicional de cor */}
                    <IoRepeat 
                        className="control-icon" 
                        size={16} 
                        onClick={toggleRepeat}
                        style={{ color: isRepeat ? activeColor : undefined }}
                        title="Repetir"
                    />
                </div>

                <div className="progress-bar-container">
                    <span className="time-display">0:30</span>
                    <div className="progress-bar">
                        <div className="progress-filled" style={{ width: isPlaying ? '45%' : '25%' }}></div>
                    </div>
                    <span className="time-display">3:45</span>
                </div>
            </div>

            <div className="volume-controls">
                <IoVolumeMedium className="volume-icon" size={20} />
                <div className="volume-slider">
                     <div className="volume-filled" style={{ width: `${volume}%` }}></div>
                </div>
            </div>
        </footer>
    );
};

export default MusicPlayer;