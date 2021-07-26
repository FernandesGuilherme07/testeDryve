import Footer from './components/footer';
import SideBar from './components/sidebar'
import Topbar from './components/topbar'
import Home from './pages/home';
import {  Container } from './style/app.styled';

import './style/globals.style.css'

function App() {
  return (
   <>
     <Topbar/>
     <Container>
       <SideBar/> 

       <Home/>
      </Container>

    <Footer/> 
    </>
  );
}

export default App;
