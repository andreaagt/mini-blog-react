import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />   
          </Routes>
          <Routes>
            <Route path="/create" element={<Create />} />  
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
