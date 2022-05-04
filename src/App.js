import './App.css';

function Holamundo(props) {
  return(
    <div id='marco'>
      <h1> {props.subtitle} </h1>
      {props.texto}
    </div>
  );
}

function App() {
  return (
    <div>
      EStos son mis componentes
      <Holamundo texto='marco1' subtitle='Caja1'/>
      <Holamundo texto='marco2' subtitle='Caja2'/>
      <Holamundo texto='marco2' subtitle='Caja2'/>
    </div>
  );
}

export default App;
