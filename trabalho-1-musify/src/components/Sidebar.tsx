import React, { useState } from 'react';
import { menuItems, playlists as initialPlaylists } from '../data';
import { IoHome, IoSearch, IoLibrary } from 'react-icons/io5'; 
import { FaPlus } from 'react-icons/fa';

const IconMap: Record<string, React.ElementType> = {
    home: IoHome,
    search: IoSearch,
    books: IoLibrary,
    list: IoLibrary,
};

const Sidebar: React.FC = () => {
    
    const [myPlaylists, setMyPlaylists] = useState(initialPlaylists);

    // Função para criar nova playlist
    const createPlaylist = () => {
        const newId = myPlaylists.length + 1;
        const newPlaylist = {
            id: newId,
            nome: `Minha Playlist #${newId}`,
            descricao: "Playlist criada recentemente",
            capaUrl: "https://placehold.co/150", // Imagem genérica
        };

        // Atualiza o estado adicionando o novo item ao array antigo
        setMyPlaylists([...myPlaylists, newPlaylist]);
    };

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
                    {/* Botão agora chama a função createPlaylist */}
                    <button className="create-playlist-btn" onClick={createPlaylist}>
                        <FaPlus size={12} />
                    </button>
                </div>

                <ul className="playlist-list">
                    
                    {myPlaylists.map((playlist) => (
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