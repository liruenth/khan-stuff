import React from 'react';
import './../styles/Code.css';
import MorseCode from './morseCode.js';


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

    render(props) {
      return (
        <div>
            <div className='char' onClick = {this.click}>
                {this.state.displayed || this.props.shown ? 
                    <div><h1 className='largeCharacter'>{this.state.character}</h1></div>
                :
                    this.state.code.map((code, i) => {
                        return <MorseCode code={code} key={i} id={i} highlight={this.props.highlight && (i === this.props.codeNum)}/>
                    })
                }
            </div>
        </div>
      );
    }
}

export default MorseChar;