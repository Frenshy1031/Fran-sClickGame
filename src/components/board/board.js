import React, { Component } from "react";

import FadeIn from "../transitions/fade-in";
import CharacterBox from "./characterBox";
import ScoreDisplay from "./scoredisplay";

const shuffleArray = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

const initialChars = [
  {
    name: "Bowl",
    img: "img/bowl.jpg",
    clicked: false
  },
  {
    name: "Fish",
    img: "img/fish.png",
    clicked: false
  },
  {
    name: "Fish2",
    img: "img/fish2.jpeg",
    clicked: false
  },
  {
    name: "FredtheFish",
    img: "img/FredtheFish.jpg",
    clicked: false
  },
  {
    name: "Gary",
    img: "img/Gary.jpg",
    clicked: false
  },
  {
    name: "MrsPuff",
    img: "img/MrsPuff.jpg",
    clicked: false
  },
  {
    name: "Nancy",
    img: "img/Nancy.jpg",
    clicked: false
  },
  {
    name: "Ncub",
    img: "img/Ncub.jpg",
    clicked: false
  },
  {
    name: "Plankton",
    img: "img/Plankton.jpg",
    clicked: false
  },
  {
    name: "Sandy",
    img: "img/Sandy.jpg",
    clicked: false
  },
  {
    name: "Secretary",
    img: "img/secretary.jpg",
    clicked: false
  },
  {
    name: "Splash",
    img: "img/splash.jpeg",
    clicked: false
  },
  {
    name: "Sponge",
    img: "img/Sponge.jpeg",
    clicked: false
  },
  {
    name: "Spongebob",
    img: "img/spongebob.jpg",
    clicked: false
  },
  {
    name: "Character",
    img: "img/character.jpg",
    clicked: false
  }
];

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        score: 0
      },
      characters: shuffleArray(initialChars)
    };
  }

  onCharacterClick = index => {
    if (!this.state.characters[index].clicked) {
      this.setState({
        characters: shuffleArray(
          this.state.characters.map((character, current) => {
            return current === index
              ? { ...character, clicked: true }
              : character;
          })
        ),
        user: {
          ...this.state.user,
          score: this.state.user.score + 1
        }
      });
      //and shuffle
    } else {
      this.setState({
        characters: shuffleArray(
          this.state.characters.map(character => {
            return { ...character, clicked: false };
          })
        ),
        user: {
          ...this.state.user,
          score: 0
        }
      });
      //and shuffle
    }
  };

  render() {
    return (
      <div className="Board">
        <FadeIn
          in={true}
          duration={450}
          length={"30px"}
          direction={"bottom"}
          delay={"1s"}
        >
          <h4>
            Click on an image to earn points once.  Once you click in any of the images the grid will shuffle.
            <br />
            Do not click on the images more than once! The game will start-all over!
          </h4>
        </FadeIn>
        <FadeIn in={true} duration={500} direction={"bottom"} delay={"1.5s"}>
          <ScoreDisplay score={this.state.user.score} />
        </FadeIn>
        <CharacterBox
          characters={this.state.characters}
          onCharacterClick={this.onCharacterClick}
        />
      </div>
    );
  }
}
