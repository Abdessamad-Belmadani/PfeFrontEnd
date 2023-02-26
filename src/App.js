import './App.css';
import Navbar from './Components/navbar.js'
import Footer from './Components/footer.js'
import Home from './Components/home.js'
import Login from './Components/login'
import Aboutus from './Components/aboutus'
import Departement from './Components/departement'
import Departementt from './Components/test'
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <div className='w-screen' >
      <header className="sticky top-0 z-50">
       <Navbar/>
      </header>
      <main className='w-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/departement" element={<Departement/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
        </Routes>
      </Router>
       
       
      </main>
      <footer className="App-footer">
       <Footer/>
      </footer>
    </div>
  );
}

export default App;
