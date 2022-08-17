
import './App.css';
import React, { useEffect, useState }  from 'react';
import NavbarComponent from './components/navbar/index.jsx';
import FooterComponent from './components/footer/index.jsx';
import ModalComponent from './components/container/modal';
import ContainerComponent from './components/container';



function App() {
  const [isOpen, setIsOpen] = useState(false)
  // const [isOpen, setIsOpen] = useState(false)

  return (

    <div className='App'>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <NavbarComponent/>
      </nav>

      <ContainerComponent></ContainerComponent>

      <footer className="footer-expand-sm footer-dark bg-dark sticky-bottom">
        <FooterComponent/>
      </footer>
      {/* <ModalComponent open={isOpen} handleClose={() => setIsOpen(false)}/> */}
    </div>
    
  )
}




export default App;
