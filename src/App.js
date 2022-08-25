
import './App.css';
// import React, { useEffect, useState }  from 'react';
import NavbarComponent from './components/navbar/index.jsx';
import FooterComponent from './components/footer/index.jsx';
// import ModalComponent from './components/container/modal';
// import ContainerComponent from './components/container';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import EmployeesPage from './components/pages/employees/employees.jsx';
import Tribes from './components/pages/tribes/tribes.jsx';
import store from './store';
import { Provider } from 'react-redux'



function App() {
  // const [isOpen, setIsOpen] = useState(false)
  

  return (

    <div className='App'>
      <BrowserRouter>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <NavbarComponent/>
      </nav>
      <Provider store={store}>

      {/* <Contener> */}
        <Routes>
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/tribes" element={<Tribes />}/>
          
        </Routes>

      {/* <ContainerComponent></ContainerComponent> */}
      {/* </Contener> */}
      <footer className="footer-expand-sm footer-dark bg-dark sticky-bottom">
        <FooterComponent/>
      </footer>
      {/* <ModalComponent open={isOpen} handleClose={() => setIsOpen(false)}/> */}
      </Provider>
      </BrowserRouter>
    </div>
    
  )
}




export default App;
