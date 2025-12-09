// src/components/MusicPlayer.tsx
import React from 'react';
import { currentTrack } from '../data';
import { 
    IoPlaySkipBackSharp, 
    IoPlaySkipForwardSharp, 
    IoPlayCircle, // O botão principal (Play)
    IoVolumeMedium, 
    IoShuffle, 
    IoRepeat 
} from 'react-icons/io5';

const MusicPlayer: React.FC = () => {
    const track = currentTrack; // Dados estáticos

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
                    <IoPlayCircle className="play-button" size={40} /> {/* Botão Play Grande */}
                    <IoPlaySkipForwardSharp className="control-icon" size={24} />
                    <IoRepeat className="control-icon" size={16} />
                </div>

                <div className="progress-bar-container">
                    <span className="time-display">0:30</span>
                    <div className="progress-bar">
                        <div className="progress-filled" style={{ width: '25%' }}></div>
                    </div>
                    <span className="time-display">3:45</span>
                </div>
            </div>

            <div className="volume-controls">
                <IoVolumeMedium className="volume-icon" size={20} />
                <div className="volume-slider">
                     <div className="volume-filled" style={{ width: '70%' }}></div>
                </div>
            </div>
        </footer>
    );
};

export default MusicPlayer;