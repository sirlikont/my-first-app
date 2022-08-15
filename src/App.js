import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState }  from 'react';
import NavbarComponent from './components/navbar/index.jsx';
import FooterComponent from './components/footer/index.jsx';
import TableComponent from './components/table';
import ButtonComponent from './components/modal/button';
import ModalComponent from './components/modal/modal';
import CardComponent from './components/Card';
import TitleComponent from './components/title';
import TribeTable from './components/tribes'
import TribeRow from './components/tribes';



function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (

    <div className='App'>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <NavbarComponent/>
      </nav>

      <div className='Container'>

        <div className="border bg-light">
          <div>
            <TitleComponent content="Tribes" />
          </div>
        </div>

        <TribeTable/>

        <div className="d-flex flex-row border bg-light">
          <div className="col-xs-6 flex-grow-1">
            <TitleComponent content="Employees" />
          </div >


          <div className="col-xs-6">
           <ButtonComponent handleClick={setIsOpen} />
             </div> 
           </div>

           <div className= 'row row-cols-lg-3 row-cols-md-2'>
             <div>
             <CardComponent/>
             </div>

             <div>
             <CardComponent/>
             </div>

             <div>
             <CardComponent/>
             </div>

             <div>
             <CardComponent/>
             </div>

             <div>
             <CardComponent/>
             </div>
           </div>

     </div>

      <footer className="footer-expand-sm footer-dark bg-dark sticky-bottom">
        <FooterComponent/>
      </footer>
      <ModalComponent open={isOpen} handleClose={() => setIsOpen(false)}/>
    </div>
    
  )
}




export default App;
