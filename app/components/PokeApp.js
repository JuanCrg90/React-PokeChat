import React from 'react';
import uid from 'uid';
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';

export default class PokeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.onGrowl = this.onGrowl.bind(this);
  }
  onGrowl(name) {
    const text = `${name}, ${name}!`;
    const message = { id: uid(), text };
    this.state.messages.push(message);
    const messages = this.state.messages;
    this.setState({ messages });
  }
  render() {
    const pokemons = [
      { number: 1, name: 'Bulbasaur' },
      { number: 2, name: 'Ivysaur' },
      { number: 3, name: 'Venusaur' },
    ];

    return (<div className="pokeapp">
      <PokeTable pokemons={pokemons} onGrowl={ this.onGrowl }/>
      <PokeChat messages={this.state.messages}/>
    </div>);
  }
}
