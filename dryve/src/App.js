import SideBar from './components/sidebar'
import Topbar from './components/topbar'
import {  Container, Main } from './style/app.styled';

import './style/globals.style.css'

function App() {
  return (
   <div>
     <Topbar/>
     <Container>
       <SideBar/> 

       <Main>
         main
        </Main> 
      </Container>
    </div>
  );
}

export default App;
