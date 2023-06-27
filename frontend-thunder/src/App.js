import { BrowserRouter } from 'react-router-dom';
import './App.css';
import IndexRouter from './Router/router';

function App() {
  return (
    <BrowserRouter>
      <IndexRouter />
    </BrowserRouter>
  )
}

export default App;
