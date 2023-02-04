
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css"
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import ListList from "./pages/listList/ListList";
import User from "./pages/user/User";
import NewPage from "./pages/newPage/NewPage";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import {useContext} from "react"
import { AuthContext } from "./context/authContext/AuthContext";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";


function App() {

  const {user}=useContext(AuthContext);
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <BrowserRouter>
          <Routes>


            <Route path="/login" element={user ? <Navigate to="/"/>:<Login/>}>
            </Route>
            {user && 
            <>
              <Route exact path="/" element={<Home/>}>
              </Route>
              <Route path="/users" element={<UserList/>}>
              </Route>
              <Route path="/user/:userId" element={<User/>}>
              </Route>
              <Route path="/newUser" element={<NewPage/>}>
              </Route>
              <Route path="/movies" element={<ProductList/>}>
              </Route>
              <Route path="/product/:moviesId" element={<Product/>}>
              </Route>
              <Route path="/newproduct" element={<NewProduct/>}>
              </Route>
              <Route path="/lists" element={<ListList/>}>
              </Route>
              <Route path="/list/:listsId" element={<List/>}>
              </Route>
              <Route path="/newlist" element={<NewList/>}>
              </Route>
            </>
            }
          </Routes>
        </BrowserRouter>

      </div>

    </div>

  );
}

export default App;
