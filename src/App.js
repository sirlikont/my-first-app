import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/navbar/index.jsx';
import FooterComponent from './components/footer/index.jsx';
import TableComponent from './components/table';
import ButtonComponent from './components/modal/button';
import ModalComponent from './components/modal/modal';
import CardComponent from './components/Card';
import TitleComponent from './components/title';


function App() {
  return (
    
    <div className='App'>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <NavbarComponent/>
      </nav>

       <div className='Container'>

        <div class="border bg-light">
        <div>
          <TitleComponent content="Tribes" />
        </div>
        </div>

        <table className="table">
          <TableComponent/>
        </table>

        <div className="d-flex flex-row border bg-light">
        <div className="col-xs-6 flex-grow-1">
          <TitleComponent content="Employees" />
        </div >

      {/* <div className="row gx-2 gy-4"> */}

        <div className="col-xs-6 flex-center">
           <ButtonComponent/>
        </div>
          {/* <ModalComponent> 
            Mingi tekst
          </ModalComponent> */}
          
          {/* <ButtonComponent onClick= {ModalComponent}/> */}
        {/* </div> */}

      </div>

      {/* <div>
      <ModalComponent/>
      </div> */}
      <div class= 'row row-cols-lg-3 row-cols-md-2'>
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




      <footer class="footer-expand-sm footer-dark bg-dark sticky-bottom">
        <FooterComponent/>
      </footer>
    </div>
    </div>
  )
}




export default App;
