import React from 'react';
import './../styles/Code.css';
import MorseActions from './../actions/morse.js';

let codeLengths = MorseActions.codeLengths;
/*
For sound my plan is
stacatto = 0.5 for the rest after each dot and dash
*/

class MorseCode extends React.Component {

    renderCode = (code) => {
        let divCode;
        switch(code.len) {
            case codeLengths.space:
                divCode = <div className='space'></div>
                break;
            case codeLengths.endLetter:
                divCode = <div className='endLetter'></div>
                break;
            case codeLengths.dash:
                divCode = <div className='dash'></div>
                break;
            case codeLengths.dot:
                divCode = <div className='circle'></div>
                break;
            default:
                divCode = <div className='space'></div>
                break;
        }
        return divCode;
    };

    render(props) {
        return (
            <div className='code' key={this.props.id} >
                {this.renderCode(this.props.code)}
            </div>
        );
    }
}

export default MorseCode;