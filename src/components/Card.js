import React from 'react';
import './../styles/Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dots: props.dots || [false, false, false, false, false],
            character: props.character || '',
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
            <div className='card' onClick = {this.click}>
                {this.state.displayed || this.props.flipped ? 
                    <h1 className='largeCharacter'>{this.state.character}</h1> 
                :
                    <table>
                        <tbody>
                        <tr>
                            <td>{this.state.dots[0] && <div className = 'circle'></div>}</td>
                            <td>{this.state.dots[1] && <div className = 'circle'></div>}</td>
                        </tr>
                        <tr>
                            <td>{this.state.dots[2] && <div className = 'circle'></div>}</td>
                            <td>{this.state.dots[3] && <div className = 'circle'></div>}</td>
                        </tr>
                        <tr>
                            <td>{this.state.dots[4] && <div className = 'circle'></div>}</td>
                            <td>{this.state.dots[5] && <div className = 'circle'></div>}</td>
                        </tr>
                        </tbody>
                    </table>
                }
            </div>
        </div>
      );
    }
}

export default Card;