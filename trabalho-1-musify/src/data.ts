// src/data.ts
import type { PlaylistItem, CurrentTrack } from './types';
import foco from './assets/foco.png';
import floyd from './assets/capa-floyd.webp';
import show from './assets/show-de-rock.webp';
import praia from './assets/praia.webp';

// Dados para a Sidebar
export const menuItems: PlaylistItem[] = [
  { id: 101, nome: "Início", icone: "home" },
  { id: 102, nome: "Buscar", icone: "search" },
  { id: 103, nome: "Sua Biblioteca", icone: "books", isLibrary: true },
];

// dados para as playlists (com capa e descrição)
export const playlists = [
  {
    id: 1,
    nome: "Rock Clássico",
    descricao: "Os maiores clássicos do rock de todos os tempos.",
    capaUrl: show,
  },
  {
    id: 2,
    nome: "Foco Total",
    descricao: "Músicas para manter a concentração no trabalho ou estudo.",
    capaUrl: foco,
  },
  {
    id: 3,
    nome: "Hits do Verão",
    descricao: "As músicas mais quentes da estação.",
    capaUrl: praia,
  },
];

// Dados para o Music Player
export const currentTrack: CurrentTrack = {
  titulo: "Time",
  artista: "Pink Floyd",
  album: "The Dark Side of the Moon",
  capaUrl: floyd,
};

export const playlistTracks: Record<number, CurrentTrack[]> = {
  1: [ // Rock Clássico
    { titulo: "Bohemian Rhapsody", artista: "Queen", album: "A Night at the Opera", capaUrl: "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png" },
    { titulo: "Sweet Child O' Mine", artista: "Guns N' Roses", album: "Appetite for Destruction", capaUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbum.jpg" },
    { titulo: "Back in Black", artista: "AC/DC", album: "Back in Black", capaUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/ACDC_Back_in_Black_cover.svg" },
  ],
  2: [ // Foco Total
    { titulo: "River Flows in You", artista: "Yiruma", album: "First Love", capaUrl: "https://upload.wikimedia.org/wikipedia/en/5/5e/Yiruma_-_First_Love.jpg" },
    { titulo: "Cornfield Chase", artista: "Hans Zimmer", album: "Interstellar OST", capaUrl: "https://upload.wikimedia.org/wikipedia/en/b/b3/Interstellar_soundtrack_cover.jpg" },
  ],
  3: [ // Hits do Verão
    { titulo: "Watermelon Sugar", artista: "Harry Styles", album: "Fine Line", capaUrl: "https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_Fine_Line.png" },
    { titulo: "Levitating", artista: "Dua Lipa", album: "Future Nostalgia", capaUrl: "https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png" },
  ]
};