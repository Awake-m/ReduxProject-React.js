import logo from './logo.svg';
import './App.css';
import MainRouter from './Router/MainRouter';
import Header from './Componet/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainRouter/>
    </div>
  );
}

export default App;
