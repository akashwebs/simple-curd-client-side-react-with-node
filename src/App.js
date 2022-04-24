import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import UpddateUser from './components/UpddateUser/UpddateUser';
import Headers from './components/Headers/Headers';

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user/add' element={<AddUser></AddUser>}></Route>
        <Route path='/update/:id' element={<UpddateUser></UpddateUser>}></Route>

      </Routes>
    </div>
  );
}

export default App;
