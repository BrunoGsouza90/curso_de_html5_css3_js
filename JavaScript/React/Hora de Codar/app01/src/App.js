import logo from './logo.svg';
import './App.css';
import { Carros } from './components/Carros';

function App() {

  const nome = "Bruno Gonçalves de Souza";

  const data = {

    carros: {

      nome: "Golf",
      modelo: "GTI",
      ano: "2011",
      cor: "Amarelo"

    }

  }

  return (

    <div className="App">

      <h2>Alterando o JSX!</h2>
      <p>Meu nome é {nome}.</p>
      <p>A soma de 2 + 2 é {2 + 2}.</p>

      <Carros data = {data}></Carros>

    </div>
  );

}

export default App;
