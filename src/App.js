import React, { Component } from "react";
import CatCard from "./components/CatCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cats from "./cats.json";
import Navbar from "./components/Navbar";


class App extends Component {
  // Setting this.state.cats to the cats json array
  state = {
    cats,
    topscore: 0,
    score: 0,
    
  };

randomImages = id => {

    cats.map(catsObject => {

      if (id === catsObject.id) {
        if (catsObject.clicked === false) {

          // alert("found false");
          catsObject.clicked = true;
          this.setState({ score: this.state.score + 1, topscore: this.state.topscore + 1, cats });
          return  false;
        }
        else {
          this.setState({score: 0});
          return true;
        }
      }

      return  true;

    });
    cats.sort(() => Math.random() - 0.5);
  };
  
 // Map over this.state.friends and render a FriendCard component for each friend object
 render() {
  return (
    <Wrapper>
      <Navbar
        score={this.state.score}
        topscore={this.state.topscore}
      />
      <Title>Disney's Famous Cats</Title>
      {this.state.cats.map(cat => (
        <CatCard
          randomImages={this.randomImages}
          id={cat.id}
          key={cat.id}
          name={cat.name}
          image={cat.image}
        />
      ))}
    </Wrapper>
   );
  }
}

export default App;
