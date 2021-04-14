import './App.css';
import Navbar from './components/Navbar';
import Chat from './components/Chat'
import { useContext } from 'react';
import { chatContext } from './context/ChatProvider';

function App() {

  const{user} = useContext(chatContext)

  return user.state !== null ? (
    <div className="App">
      <Navbar/>

        {
          user.state ? (
            <Chat/>
          ) : (
            <div className='lead text-center mt-5'>
              Debes iniciar sesion
            </div>
          )
        }

      
    </div>
  ) : (
    <div>Cargando...</div>
  )
}

export default App;
