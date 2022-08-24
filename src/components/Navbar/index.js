import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.svg"
import appstore from "../../assets/images/appstore.svg"
import google from "../../assets/images/googleplay.svg"
import { FaBars } from "react-icons/fa"
const Header = () => {
   const navigate = useNavigate()
   const location = useLocation()
   const [classname, setclassname] = useState("navbarstyle")
   useEffect(() => {
      if (location.pathname === "/about") {
      } else {
         console.log(false);
      }
   }, [])
   let activeStyle = {
      color: "#FFC007",
   };

   const menu = [

      {
         link: "О проекте",
         route: "about"
      },
      {
         link: "Новости",
         route: "news"
      },
      {
         link: "Партнеры",
         route: "partner"
      },
   ]
   const appClick = () => {
      window.open("https://www.apple.com/ru/app-store/")
   }
   const googleClick = () => {
      window.open("https://play.google.com/store/games?hl=ru&gl=US")
   }
   return (
      <div>
         <Navbar className='py-4' style={{ "background": "#17171C" }} expand="lg">
            <Container>
               <Navbar.Brand onClick={() => navigate("/")}>
                  <img src={logo} alt="" />
               </Navbar.Brand>
               <Navbar.Toggle
                  id={"basic-navbar-nav"}
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <FaBars color='white' />
               </Navbar.Toggle>
               {/* <Navbar.Collapse id="basic-navbar-nav"> */}
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="gap-3 d-flex justify-content-center w-100 align-items-center py-2">
                     {
                        menu.map((e, i) => <NavLink style={({ isActive }) =>
                           isActive ? activeStyle : undefined
                        } to={e.route} key={i}>
                           {e.link}
                        </NavLink>)
                     }
                  </Nav>

                  <div className="d-flex gap-3 justify-content-center">
                     <img style={{ "cursor": "pointer" }} onClick={() => appClick()} src={appstore} alt="" />
                     <img style={{ "cursor": "pointer" }} onClick={() => googleClick()} src={google} alt="" />

                  </div>
               </Navbar.Collapse>
            </Container>
         </Navbar>

      </div>
   )
}

export default Header