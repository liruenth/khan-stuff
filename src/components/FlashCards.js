import React from 'react';
import './../App.css';
import Card from './Card.js';
import generateScentence from '../actions/scentenceGenerator.js';
import scentenceToBraille from '../actions/braille.js';
let num = 0;

class FlashCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        }
    };

    loadCards = () => {
        let scentence = generateScentence();
        console.log(scentence);
        let cards = scentenceToBraille(scentence);
        console.log(cards);
        this.setState({
            cards,
        });
        console.log(this.state.cards);
    };

    render(props) {
        return (
          <div className="App">
            <header className="App-header">
                <button onClick={this.loadCards}><h2>Generate Scentence</h2></button>
            </header>
            <div className="line">
                {
                    this.state.cards.map(card => {
                        num++;
                        return <Card key={num}dots={card.dots} character={card.character} />
                    })
                }
            </div>
          </div>
        );
    };
};

export default FlashCards;