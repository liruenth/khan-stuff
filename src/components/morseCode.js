import React from 'react';
import './../styles/Code.css';

/*
For sound my plan is
stacatto = 0.5 for the rest after each dot and dash
convert binary to length of note using formula x = x * 2 + 1
*/

class MorseCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: props.code || ['space'],
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
                this.state.code.map(code => {
                    switch(code) {
                        case 'space':
                            return <div className='space'></div>
                        case 'endLetter':
                            return <div className='endLetter'></div>
                        case 1:
                            return <div className='dash'></div>
                        case 0:
                            return <div className='circle'></div>
                        default:
                            return <div className='space'></div>
                    }
                })
            }
            </div>
        );
    };

    render(props) {
      return (
        <div>
            <div className='code' onClick = {this.click}>
                {this.state.displayed || this.props.shown ? 
                    <h1 className='largeCharacter'>{this.state.character}</h1> 
                :
                    this.renderCode()
                }
            </div>
        </div>
      );
    }
}

export default MorseCode;