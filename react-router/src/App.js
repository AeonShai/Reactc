//App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Users from './components/Users';
import User from './components/User';

function App() {
  return (
    <div className="App">
         <div className="App">
       <Routes>
         <Route path='/' exact element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/users' Component={Users} />
         <Route path='/user/:id' Component={User} />
       </Routes>
     </div>
    </div>
  );
}

export default App;