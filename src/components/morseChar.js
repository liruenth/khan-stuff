import React from 'react';
import './../styles/Code.css';
import morseActions from './../actions/morse.js';
import MorseCode from './morseCode.js';

let codeLengths = morseActions.codeLengths;
/*
For sound my plan is
stacatto = 0.5 for the rest after each dot and dash
*/

class MorseChar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: props.code || [{len: 6}],
            character: props.character || ' ',
            displayed: false,
        }
    }
    click = () => {
        this.setState({
            displayed: !this.state.displayed,
        });
    };

    renderCode = () => {
        return (
            <div className='code'>
            {
                this.state.code.map((code, i) => {
                    switch(code.len) {
                        case codeLengths.space:
                            return <div key={i} className='space'></div>
                        case codeLengths.endLetter:
                            return <div key={i} className='endLetter'></div>
                        case codeLengths.dash:
                            return <div key={i} className='dash'></div>
                        case codeLengths.dot:
                            return <div key={i} className='circle'></div>
                        default:
                            return <div key={i} className='space'></div>
                    }
                })
            }
            </div>
        );
    };

    render(props) {
      return (
        <div>
            <div className='char' onClick = {this.click}>
                {this.state.displayed || this.props.shown ? 
                    <div><h1 className='largeCharacter'>{this.state.character}</h1></div>
                :
                    this.state.code.map((code, i) => {
                        return <MorseCode code={code} key={i} id={i} />
                    })
                }
            </div>
        </div>
      );
    }
}

export default MorseChar;