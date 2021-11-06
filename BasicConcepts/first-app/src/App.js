import './App.css';
import Formulario from './components/Formulario';
import LayoutBasic from './components/LayoutBasic';

// import HolaMundo, {AdiosMundo} from './components/HolaMundo';
// import HolaMundo from './components/HolaMundo';
// import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

function App() {

  const user = {
    nombre: 'Jay',
    apellidos: 'Ramírez',
    edad: 25,
    color: 'Green'
  }

  const sayHello = (name) => {
    alert(`Hello ${name}!`);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1> Formulario </h1> */}
        
        {/* <HolaMundo/>

        <AdiosMundo/> */}

        {/* <Saludar user={user} saludarFunction={sayHello}/> */}

        {/* <Formulario/> */}

        {/* <Saludar saludarFunction={sayHello}/> */}


        <LayoutBasic> 
        <Saludar user={user} saludarFunction={sayHello}/> 
        <footer>Hello footer</footer>
        </LayoutBasic>
      </header>
    </div>
  );
}

export default App;
