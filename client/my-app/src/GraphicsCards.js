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
     
    <div>

<div class="d-flex justify-content-start bd-highlight mb-3">
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
    <div class="p-2 bd-highlight">Flex item</div>
  </div>


      <ul>
        { this.state.GraphicsCards.map(graphicsCard => <div class="card d-flex d-inline-flex justify-content-start bd-highlight mb-3" style={{width: "18rem"}} >
  <img class="card-img-top p-2 bd-highlight" src="..." alt="Card image cap" src="https://c1.neweggimages.com/NeweggImage/ProductImage/ABRD_131602818904375879AbE3XajvFc.jpg"/>
  <div class="card-body">
    <h5 class="card-title">{graphicsCard.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>)}
      </ul>
      </div>
    )
  }
}
