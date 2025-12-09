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
    onNext: () => void; // Recebe a função do App
    onPrev: () => void; // Recebe a função do App
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ track, onNext, onPrev }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(70);
    const [progress, setProgress] = useState(30); // Progresso em % (0 a 100)
    
    const [isShuffle, setIsShuffle] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);

    const togglePlay = () => setIsPlaying(!isPlaying);
    const toggleShuffle = () => setIsShuffle(!isShuffle);
    const toggleRepeat = () => setIsRepeat(!isRepeat);
    const activeColor = '#1db954';

    // --- LÓGICA DAS BARRAS ---
    // Esta função genérica calcula a porcentagem baseada no clique
    const handleBarClick = (e: React.MouseEvent<HTMLDivElement>, updateFunction: (val: number) => void) => {
        const bar = e.currentTarget; // O elemento clicado (barra completa)
        const rect = bar.getBoundingClientRect(); // Pega as coordenadas da barra na tela
        const clickX = e.clientX - rect.left; // Onde foi o clique dentro da barra (X)
        const newPercentage = (clickX / rect.width) * 100; // Regra de 3 para achar %
        
        // Limita entre 0 e 100 para evitar erros
        const finalValue = Math.min(100, Math.max(0, newPercentage));
        updateFunction(finalValue);
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
                    <IoShuffle 
                        className="control-icon" size={16} onClick={toggleShuffle}
                        style={{ color: isShuffle ? activeColor : undefined }}
                    />

                    {/* Botão Anterior chamando a prop */}
                    <IoPlaySkipBackSharp className="control-icon" size={24} onClick={onPrev} />
                    
                    <div onClick={togglePlay}>
                        {isPlaying ? (
                            <IoPauseCircle className="play-button" size={40} />
                        ) : (
                            <IoPlayCircle className="play-button" size={40} />
                        )}
                    </div>

                    {/* Botão Próximo chamando a prop */}
                    <IoPlaySkipForwardSharp className="control-icon" size={24} onClick={onNext} />
                    
                    <IoRepeat 
                        className="control-icon" size={16} onClick={toggleRepeat}
                        style={{ color: isRepeat ? activeColor : undefined }}
                    />
                </div>

                <div className="progress-bar-container">
                    {/* Tempo atual fictício calculado via % */}
                    <span className="time-display">
                        {Math.floor((progress / 100) * 3)}:{Math.floor(((progress / 100) * 180) % 60).toString().padStart(2, '0')}
                    </span>
                    
                    {/* BARRA DE PROGRESSO CLICÁVEL */}
                    <div 
                        className="progress-bar" 
                        onClick={(e) => handleBarClick(e, setProgress)} // Chama a função mágica
                    >
                        <div className="progress-filled" style={{ width: `${progress}%` }}></div>
                    </div>
                    
                    <span className="time-display">3:00</span>
                </div>
            </div>

            <div className="volume-controls">
                <IoVolumeMedium className="volume-icon" size={20} />
                
                {/* BARRA DE VOLUME CLICÁVEL */}
                <div 
                    className="volume-slider"
                    onClick={(e) => handleBarClick(e, setVolume)} // Chama a função mágica
                >
                     <div className="volume-filled" style={{ width: `${volume}%` }}></div>
                </div>
            </div>
        </footer>
    );
};

export default MusicPlayer;