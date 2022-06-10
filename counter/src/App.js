import { useEffect, useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001')
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, []);

  return (
    <div className="App">
      <Counter />
      <code>
        {JSON.stringify(pokemon, null, 2)}
      </code>
    </div>
  );
}

export default App;
