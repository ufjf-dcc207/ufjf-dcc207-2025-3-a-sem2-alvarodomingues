import PlaylistCard from '../components/PlaylistCard';
import { playlists } from '../data'; // Importa os dados estáticos

const HomeView = () => {
  return (
    <main className="home-view">
      <h2>Sua Biblioteca</h2>
      <div className="playlists-grid">
        
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
      
    </main>
  );
};

export default HomeView;