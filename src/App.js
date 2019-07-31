import React from 'react';
import FlashCards from './components/FlashCards.js';
import Home from './pages/home';
import Header from './components/header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: [],
    }
  };

  render(props) {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/braille" component={FlashCards}/>
            <Route path="/morse" component={FlashCards}/>
            <Route path="/sudoku" component={FlashCards}/>
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;
