import './App.css';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer'; 
import HomeView from './views/HomeView';

const App = () => {
  return (
    <div className="spotify-layout">
      <Sidebar />
      <div className="main-content">
        <HomeView />
      </div>
      <MusicPlayer />
    </div>
  );
};

export default App;