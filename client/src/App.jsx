
import './App.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import {AuthContext} from "./authContext/AuthContext"
import {useContext} from "react"
const App=()=>{
  const {user}=useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ user ? <Home type="movies"/> : <Navigate to="/register"/>}></Route>
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/"/>}></Route>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>}></Route>
        {user && (
          <>
            <Route path="/movies" element={<Home type="movies"/>}></Route>
            <Route path="/series" element={<Home type="series"/>}></Route>
            <Route path="/watch/:id" element={<Watch/>}></Route>
          </>

        )}

      </Routes>
    </BrowserRouter>

  )
  
};

export default App;
