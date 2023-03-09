import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ResponsiveDrawer from './pages/dashboard'

function App() {
  return (
    <div className="App">
      <>
      <h1>hello</h1>
      <BrowserRouter>
        <ResponsiveDrawer/>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
