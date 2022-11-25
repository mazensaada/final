import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../components/navbar.css"
import { logout } from '../JS/userSlice/userSlice';



const Navbar = () => {
  const isAuth=localStorage.getItem("token");
 
  const dispatch = useDispatch()
  const user=useSelector(store=>store.user?.user)

  return (
    <div>
      <nav class="mainnav">
     {/* <!-- LOGO --> */}
     <div class="logo">MAZEN</div>
     {/* <!-- NAVIGATION MENU --> */}
     <ul class="nav-links">
       {/* <!-- USING CHECKBOX HACK --> */}
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
       {/* <!-- NAVIGATION MENUS --> */}
       <div class="menu">
         <li><Link to="/" >Home</Link></li>
         <li><Link to="/about">about</Link></li>
         
        {isAuth ?<li onClick={()=>{dispatch(logout());
        // setTimeout(() => {
        //     window.location.reload()
        // }, 600);
        }}>Logout</li> :<li><Link to="/Login" >Login</Link></li>}

        <li>{user?.name}</li>
       
         
       </div>
       
     </ul>
   </nav>
    </div>
  )
}

export default Navbar