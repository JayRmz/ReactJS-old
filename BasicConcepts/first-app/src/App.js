import './App.css';
// import HolaMundo, {AdiosMundo} from './components/HolaMundo';
// import HolaMundo from './components/HolaMundo';
// import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

function App() {

  const user = {
    name: 'Jay',
    lastName: 'Ramírez',
    age: 25,
    color: 'Green'
  }

  const sayHello = (name) => {
    alert(`Hello ${name}!`);
  };

  return (
    <div className="App">
      <header className="App-header">
        
        {/* <HolaMundo/>

        <AdiosMundo/> */}

        <Saludar user={user} saludarFunction={sayHello}/>

        {/* <Saludar saludarFunction={sayHello}/> */}
      </header>
    </div>
  );
}

export default App;
