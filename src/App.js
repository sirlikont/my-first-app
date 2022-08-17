
import './App.css';
import React, { useEffect, useState }  from 'react';
import NavbarComponent from './components/navbar/index.jsx';
import FooterComponent from './components/footer/index.jsx';
import ModalComponent from './components/container/modal';
import ContainerComponent from './components/container';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import EmployeesPage from './components/pages/employees/employees.jsx';
import TribesPage from './components/pages/tribes/tribes.jsx';



function App() {
  const [isOpen, setIsOpen] = useState(false)
  

  return (

    <div className='App'>
      <BrowserRouter>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <NavbarComponent/>
      </nav>

      {/* <Contener> */}
        <Routes>
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/tribes" element={<TribesPage />}/>
          
        </Routes>

      {/* <ContainerComponent></ContainerComponent> */}
      {/* </Contener> */}
      <footer className="footer-expand-sm footer-dark bg-dark sticky-bottom">
        <FooterComponent/>
      </footer>
      {/* <ModalComponent open={isOpen} handleClose={() => setIsOpen(false)}/> */}
      
      </BrowserRouter>
    </div>
    
  )
}




export default App;
