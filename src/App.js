import './App.css';
import Home from './pages';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router basename={window.location.pathname || 'booknbeyond'} className="App">
      <Home />
    </Router>
  );
}

export default App;
