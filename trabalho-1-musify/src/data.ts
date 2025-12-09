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
