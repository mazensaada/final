import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userCurrent } from "./JS/userSlice/userSlice";
import AddProduit from "./components/AddProduit";
import Profile from "./components/Profile";
import { getProduct } from "./JS/productSlice/productSlice";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Card from "./components/Card";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const [ping, setPing] = useState(false);
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    isAuth && dispatch(userCurrent());
    dispatch(getProduct());
  }, [ping]);
  return (
    <div className="App">
      <div className="header"></div>
      <Navbar />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/add" element={<AddProduit ping={ping} setPing={setPing}/>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home ping={ping} setPing={setPing} />} />
        <Route path="/about" element={<About />} />
        {/* <Route path='/Card'  element={Card }/> */}
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
     

    </div>
  );
}

export default App;
