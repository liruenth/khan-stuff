import React from 'react';
import './../App.css';
import Card from './Card.js';
import generateSentence from '../actions/sentenceGenerator.js';
import sentenceToBraille from '../actions/braille.js';
let num = 0;

class FlashCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            allFlipped: false,
        }
    };

    loadCards = () => {
        let sentence = generateSentence();
        console.log(sentence);
        let cards = sentenceToBraille(sentence);
        console.log(cards);
        this.setState({
            cards,
            allFlipped: false,
        });
        console.log(this.state.cards);
    };

    flipAll = () => {
        this.setState({
            allFlipped: !this.state.allFlipped,
        })
    };

    render(props) {
        return (
          <div className="App">
            <header className="App-header">
                <button onClick={this.loadCards}><h2>Generate Sentence</h2></button>
                <button onClick={this.flipAll}><h2>Flip All</h2></button>
            </header>
            <div className="line">
                {
                    this.state.cards.map(card => {
                        num++;
                        return <Card flipped={this.state.allFlipped} key={num}dots={card.dots} character={card.character} />
                    })
                }
            </div>
          </div>
        );
    };
};

export default FlashCards;