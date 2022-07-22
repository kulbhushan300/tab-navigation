import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Thank from "./components/Thank";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/page-1/" element={<Page1 />} />
          <Route exact path="/page-2/" element={<Page2 />} />
          <Route exact path="/form/" element={<Form />} />
          <Route exact path="/thank-you/" element={<Thank />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
