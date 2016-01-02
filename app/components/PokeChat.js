import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PokeMessage from './PokeMessage';


export default class PokeChat extends React.Component {
  render() {
    return (<ul className = "pokechat" >
            <ReactCSSTransitionGroup transitionName = "message-animation" transitionEnterTimeout = {500}>
            {
              this.props.messages.map((message) => {
                return <PokeMessage key={message.id} message={message} />;
              })
            }
            </ReactCSSTransitionGroup>
            </ul>);
  }
}

PokeChat.defaultProps = { messages: [] };
