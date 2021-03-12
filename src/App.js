import {useContext} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './assets/style.sass'

import {DataContext} from './dataContext'

import Home from './components/home';
import Game from './components/game';


function App() {

  const  {isPlaying} = useContext(DataContext);

  return (
    <div className="App">
      <Router>
          <Route exact path="/"> 
              <Home />
          </Route>
          <Route exact path="/game"> 
            { isPlaying ? <Game /> : <Redirect to="/" />}
          </Route>
      </Router>

    </div>
  );
}

export default App;
