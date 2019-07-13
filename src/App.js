import React from 'react';
import FlashCards from './components/FlashCards.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scentence: [],
    }
  };

  render(props) {
    return (
      <FlashCards />
    );
  };
}

export default App;
