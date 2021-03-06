import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="*" element={<NotFound />} />  
            <Route exact path="/" element={<Home />} />   
            <Route path="/create" element={<Create />} />  
            <Route path="/blogs/:id" element={<BlogDetails />} />  
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
