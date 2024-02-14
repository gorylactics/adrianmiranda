import './App.css';
import adrianLogo from './assets/img/logo_adrian_miranda_final_3.png'
import NavBar from './components/NavBar/molecules/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <div className='contenedor_momentaneo'>
        <h1>En construccion</h1>
        <hr className='linea'/>
        <img src={adrianLogo} alt='logo adrian miranda' className='logo_fondo'/>
      </div>
    </>
  );
}
export default App;
