import Intro from '../src/components/introduction/Intro';
import About from '../src/components/about/About';
import EpisodeList from './components/episodeList/EpisodeList';
import AboutW from '../src/components/about/AboutW';

const App = () => {
  return <div>
    <Intro/>
    <About/>
    <AboutW/>
    <EpisodeList/>
  </div>;
};

export default App;