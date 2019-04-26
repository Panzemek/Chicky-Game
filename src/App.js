import React, { Component } from "react";
import Chicks from "./components/Chicks";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import ChickPics from "./ChickPics.json";

class App extends Component {
  state = {
    playerScore: 0,
    highScore: 0,
    ChickPics,
    notGuessed: ChickPics.slice()
  };

  playerClick = id => {
    if (!this.state.notGuessed.includes(ChickPics[id - 1])) {
      if (this.state.playerScore > this.state.highScore) {
        this.setState({
          highScore: this.state.playerScore
        });
      }
      this.setState({
        playerScore: 0,
        notGuessed: this.state.ChickPics.slice()
      });
    } else {
      this.setState({
        playerScore: this.state.playerScore + 1,
        notGuessed: this.state.notGuessed.filter(chick => chick.id !== id)
      });
    }
  };

  randomChicks(picsArray) {
    let tempArray = picsArray.slice();
    let randomizedArray = [];
    while (tempArray.length > 0) {
      var randIndex = Math.floor(Math.random() * tempArray.length);
      randomizedArray.push(tempArray[randIndex]);
      tempArray.splice(randIndex, 1);
    }
    return randomizedArray;
  }

  render() {
    const randomChicksArray = this.randomChicks(ChickPics);
    return (
      <Wrapper>
        <Title>Pick a Chick Pic</Title>
        <Score>
          Score: {this.state.playerScore} | High Score {this.state.highScore}
        </Score>
        {randomChicksArray.map(chick => (
          <Chicks
            id={chick.id}
            key={chick.id}
            image={chick.image}
            playerClick={this.playerClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
