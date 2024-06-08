import Home from "./Screens/Home" 
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from "./Screens/Login";
import Signup from "./Screens/Signup.jsx";
import { CartProvider } from "./components/ContextReducer.jsx";
import MyOrder from "./Screens/MyOrder.jsx";
import AboutOwner from "./Screens/AboutOwner.jsx";
function App() {

  return (
    <CartProvider>
<Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
         <Route exact path='/createuser' element={<Signup></Signup>}></Route>
         <Route exact path='/myOrder' element={<MyOrder></MyOrder>}></Route>
         <Route exact path='/aboutOwner' element={<AboutOwner></AboutOwner>}></Route>
        </Routes>
      </div>
    </Router>
    </CartProvider>
  )
}

export default App
