import pokemons from './pokemons';

export default {
  pokemons: {
    find(callback) {
      setTimeout(() => {
        callback(pokemons);
      }, 3000);
    },
  },
};
