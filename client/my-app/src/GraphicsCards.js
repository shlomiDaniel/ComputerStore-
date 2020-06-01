import React from 'react';

import axios from 'axios';

export default class GraphicsCardList extends React.Component {
  state = {
    GraphicsCards: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/gpu`)
      .then(res => {
        const GraphicsCards = res.data;
        this.setState({ GraphicsCards });
      })
  }

  render() {
    return (
      <ul>
        { this.state.GraphicsCards.map(graphicsCard => <li>{graphicsCard.name}</li>)}
      </ul>
    )
  }
}
