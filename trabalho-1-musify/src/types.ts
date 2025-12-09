// Tipagem para os itens da Playlist/Lista de Navegação
export interface PlaylistItem {
    id: number;
    nome: string;
    icone?: string; // Para os ícones da Sidebar
    isLibrary?: boolean; // Para separar o menu principal da biblioteca
}

// Tipagem para a música sendo reproduzida
export interface CurrentTrack {
    titulo: string;
    artista: string;
    album: string;
    capaUrl: string;
}

// Tipagem para as props dos Cards 
export interface PlaylistProps {
  playlist: PlaylistItem;
}