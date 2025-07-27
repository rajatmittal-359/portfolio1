// import './App.css'
// import Header  from './Header'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from './Home'
// import Contact from './Contact'
// import About from './About'
// import Counter from './Counter'
// function App() {
  
//   return (
//     <>
//     <BrowserRouter>
//         <Header/>
        
//         <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>} />
//         <Route path='/contact' element={<Contact/>} />
//         <Route path='/counter' element={<Counter/>} />
//         </Routes>
//         <About/>
//         <Contact/>
//         <Counter/>
//     </BrowserRouter>

//     </>
//   )
// }

// export default App
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Signup from './Signup';
import LLogin from './LLogin';
function App() {
  return (
    <BrowserRouter>
      <Header />
  <Routes>
         {/* Home page with scrollable sections */}
         <Route path="/" element={<><Home /><About /><Contact /></>} />
          {/* Full pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/llogin" element={<LLogin/>} />
</Routes>

    </BrowserRouter>
  );
}

export default App;
