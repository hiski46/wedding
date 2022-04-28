import './App.css';
import Hero from './component/Hero'
import { data } from './data/hero.js';

function App() {
  return (
    <div>
      <Hero img={ data }></Hero>
    </div>

  );
}

export default App;
