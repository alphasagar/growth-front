import './App.css';
import ApiComponent from './components/ApiComponent';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Results from './components/Results';

function App() {
  return (
    
   <Router>
        <Routes>
        <Route exact path="/" element={<ApiComponent/>} />
        </Routes>
    
   </Router>
  // <Results/>
  );
}

export default App;
