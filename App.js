import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import {useState} from 'react';

/* function handleButtonClick(){
  alert('Clicado');
} */

function App() {

  const [contador, setContador] = useState(0);

  function handleButtonClick(){
    setContador(contador+1);
  }
  return (
    <div className="App">
        
        <Header title={contador}/>
        <p>
          Hello World!
        </p>
        {/*DUAS FORMAS DE FAZER UMA CHAMADA DE ALERT DE UM BOTÃO */}
        <input type="button" value="Clique aqui" onClick={handleButtonClick}/>
        {/* <input type="button" value="Clique aqui" onClick={()=> alert("Clicou")}/> */}
        
    </div>
    
  );
}

export default App;
