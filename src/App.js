import './App.css';
import Landing from './pages/Landing.jsx'
import Header from './components/Header.jsx'
import Title from './components/Title.jsx'
import Main from './components/mainn/Main.jsx'


function App() {
  return (
    <div className="App">
      <Landing>
        <Header/>
        <Title />
        <Main />
      </Landing>
    </div>
  );
}

export default App;
