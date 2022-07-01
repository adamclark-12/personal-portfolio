
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Contact from './Components/Contact';
import GitHub from './Components/GitHub';
import Homepage from './Components/Homepage';
import SideBar from './Components/SideBar';
import './styles.css';

class App extends Component {
  render() {
  return (
    <Router>
      <div className="App">
        <SideBar />
          <Routes>
            <Route exact path= '/' element={<Homepage />}></Route>
            <Route exact path= '/contact' element={<Contact />}></Route>
            <Route exact path= '/github' element={<GitHub/>}></Route>
          </Routes>
        </div>
      </Router>
  );
  }
}

export default App;
