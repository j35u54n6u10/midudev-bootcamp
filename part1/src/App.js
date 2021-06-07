import './App.css';
import Result from './Result.js'

function App() {
  return (
    <div className="App">
      <stroke>Titulo</stroke>
      <div>
        <p>El resultado es:</p>
        <Result color="red" messages='Probando...'/>
        <Result color="green" messages='Probando 1...'/>
        <Result color="yellow" messages='Probando 2...'/>
      </div>

    </div>
  );
}

export default App;
