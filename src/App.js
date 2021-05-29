import './App.css';
import Landing from './pages/Landing.jsx'
import Header from './components/Header.jsx'
import Title from './components/Title.jsx'
import Mainn from './components/mainn/Mainn.jsx'


function App() {
  return (
    <div className="App">
      <Landing>
        <Header/>
        <Title />
        <Mainn />
      </Landing>
    </div>
  );
}

export default App;
