import './App.css';
import Navbar from './Components/navbar.js'
import Footer from './Components/footer.js'
import Home from './Components/home'
import Login from './Components/login'
import Aboutus from './Components/aboutus'
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="sticky top-0 z-50">
       <Navbar/>
      </header>
      <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
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
