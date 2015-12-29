import React from 'react';


class PokeAvatar extends React.Component {
  render() {
    const url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
    return <img src = {url} className="avatar" />;
  }
}

class PokeRow extends React.Component {
  render() {
    return <li className="pokerow" >
    <PokeAvatar number = {this.props.number} />
    {this.props.name}
    </li>;
  }
}


export default class PokeTable extends React.Component {
  render() {
    return <ul className="poketable">
    {
      this.props.pokemons.map((pokemon) => {
        return <PokeRow key={pokemon.number} name={pokemon.name} number={pokemon.number} />
      })
    }

    </ul>;
  }
}



