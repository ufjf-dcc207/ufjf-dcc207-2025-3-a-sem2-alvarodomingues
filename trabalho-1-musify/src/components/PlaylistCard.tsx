
interface PlaylistProps {
  playlist: {
    id: string;
    nome: string;
    capaUrl: string;
    descricao: string;
    
  };
}
const PlaylistCard: React.FC<PlaylistProps> = ({ playlist }) => { 
  return (
    <div className="playlist-card">
      
      <img src={playlist.capaUrl} alt={`Capa da playlist ${playlist.nome}`} className="playlist-cover" />
      <h3 className="playlist-title">{playlist.nome}</h3>
      <p className="playlist-description">{playlist.descricao}</p>
    </div>
  );
};

export default PlaylistCard;