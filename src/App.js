import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import GitHub from "./Components/GitHub";
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";
import "./styles.css";
// using node -v 16.17.0
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="mt-5">
            <Routes>
              <Route exact path="/" element={<Homepage />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/github" element={<GitHub />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
