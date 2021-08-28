import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';
function App() {

  const user = {
    name: "Jay Ramirez",
    age: "25",
    color: "negro"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar user={user}/>
        {/* <Saludar name="Jay Ramírez Blancas" age="25"/> */}
        {/* <Saludar name="Paco" age="15"/> */}
      </header>
    </div>
  );
}

export default App;
