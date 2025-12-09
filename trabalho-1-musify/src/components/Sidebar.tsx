// src/components/Sidebar.tsx
import React from 'react';
import { menuItems, playlists } from '../data';
import type { PlaylistItem } from '../types';
// Ícones populares do React Icons (precisam ser instalados)
import { IoHome, IoSearch, IoLibrary } from 'react-icons/io5'; 
import { FaPlus } from 'react-icons/fa';

// Mapeamento simples de ícones para o menu
const IconMap: Record<string, React.ElementType> = {
    home: IoHome,
    search: IoSearch,
    books: IoLibrary,
    list: IoLibrary,
};

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <span className="logo-text">Musify</span>
            </div>
            
            <nav className="sidebar-nav">
                {menuItems.slice(0, 2).map((item) => {
                    const Icon = IconMap[item.icone || 'home'];
                    return (
                        <a key={item.id} href="#" className="nav-link">
                            <Icon size={24} />
                            <span>{item.nome}</span>
                        </a>
                    );
                })}
            </nav>

            <div className="sidebar-library">
                <a href="#" className="nav-link library-header">
                    <IoLibrary size={24} />
                    <span>Sua Biblioteca</span>
                </a>
                
                <div className="library-actions">
                    <button className="create-playlist-btn">
                        <FaPlus size={12} />
                    </button>
                </div>

                <ul className="playlist-list">
                    {playlists.map((playlist) => (
                        <li key={playlist.id} className="playlist-item">
                            <a href="#">{playlist.nome}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;