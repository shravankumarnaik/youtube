
import './App.css';
import NavBar from './components/navbar'

import Home from './components/Home';
import Addvideo from './components/addVideo';


import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PageNotFound from './components/pagenotfound';
import { Link } from 'react-router-dom';

// import Navbar1 from "./foody/navbar1";
// import Secondpage from "./foody/homepage1";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <NavBar />
    
     <Routes>
     
      <Route  element = {<Home />} path = '/' />
      <Route element = {<Addvideo />} path = '/add-video' />
      <Route element ={<PageNotFound />} path = '*' />
     </Routes>
     </BrowserRouter>
     {/* <Navbar1 /> */}
     {/* <Secondpage /> */}
     
    </div>
  );
}

export default App;

