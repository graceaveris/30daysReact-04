import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import FruitFact from './FruitFact/FruitFact';


class App extends Component {
  state = {
    fruits: [
      { name: 'Banana', fact: 'I am yellow in colour' },
      { name: 'Peach', fact: 'I have a fuzzy skin' },
      { name: 'Apple', fact: 'I tend to be crunchy' },
  ],
  showFruits: false,
  showFruitMessage: 'Show Me Fruit Facts',
}


toggleFruitFactsHandler = () => {
  const currentlyShowing = this.state.showFruits;
    this.setState({showFruits: !currentlyShowing});
       
    if (currentlyShowing === true) {
      this.setState({showFruitMessage: 'Show Me Fruit Facts'});
    } else {
      this.setState({showFruitMessage: 'Fruit Facts Are Boring'});          
    }
}


render() {

// Here we place the contentwe wish to render conditionally
  let fruitFacts = null;
   if (this.state.showFruits) {
 
    fruitFacts =(

        <div className="container">
        
        <FruitFact
        fruit={this.state.fruits[0].name}
        fact={this.state.fruits[0].fact}
        />

        <FruitFact
        fruit={this.state.fruits[1].name}
        fact={this.state.fruits[1].fact}
        />

        <FruitFact
        fruit={this.state.fruits[2].name}
        fact={this.state.fruits[2].fact}
        />

        </div>
    );
  }


//The Return Block

    return (
    <div className="App">
  

      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Three / Fruit Fact Revealer</h2>
      </header>
    

      <div className="container">
        <button
        onClick={this.toggleFruitFactsHandler}>{this.state.showFruitMessage}</button>
      </div>

      {fruitFacts}

    </div>

    );
  }
}

export default App;








