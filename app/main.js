import React from 'react';
import ReactDOM from 'react-dom';
import PokeTable from './components/PokeTable.js';

function main() {
  const pokemons = [
    { number: 1, name: 'Bulbasaur' },
    { number: 2, name: 'Ivysaur' },
    { number: 3, name: 'Venusaur' },
  ];

  ReactDOM.render(<PokeTable pokemons = {pokemons}/>, document.getElementById('app'));
}

main();
