import React from 'react';
import './../styles/Code.css';
import MorseActions from './../actions/morse.js';

let codeLengths = MorseActions.codeLengths;

class MorseCode extends React.Component {

    renderCode = (code, highlight) => {
        let divCode;
        let highlightClassName = highlight ? 'highlight' : '';
        switch(code.len) {
            case codeLengths.space:
                divCode = <div className={`space ${highlightClassName}`}></div>
                break;
            case codeLengths.endLetter:
                divCode = <div className={`endLetter ${highlightClassName}`}></div>
                break;
            case codeLengths.dash:
                divCode = <div className={`dash ${highlightClassName}`}></div>
                break;
            case codeLengths.dot:
                divCode = <div className={`circle ${highlightClassName}`}></div>
                break;
            default:
                divCode = <div className={`space ${highlightClassName}`}></div>
                break;
        }
        return divCode;
    };

    render(props) {
        return (
            <div className='code' key={this.props.id} >
                {this.renderCode(this.props.code, this.props.highlight)}
            </div>
        );
    }
}

export default MorseCode;