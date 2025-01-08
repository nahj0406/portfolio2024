/* eslint-disable */
import { Suspense, useState, useEffect } from 'react'
import {Routes, Route, Link, useLocation} from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'

// pages
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Project from './pages/Project.jsx'


function App() {

   const ScrollToTop = () => {
      const { pathname } = useLocation();
      
      useEffect(() => {
         window.scrollTo(0, 0); // 스크롤을 최상단으로 이동
      }, [pathname]);
      
      return null;
   };

   ScrollToTop();

   let loadComponent = useSelector((state) => state.loadComponent);

   let [loadPage, setPage] = useState('');

   useEffect(() => {
      let loadAni = setTimeout(() => {setPage('loadPage')}, 100);

      return () => {
         clearTimeout(loadAni);
         setPage('');
      }
   }, []);

   return (
      <div className='App'>
         {/* header */}
         <Header></Header>

         {/* main */}
         <div className="container containerV1">
            <section className="main_screen">

            </section>

            <section className="Routes_Box">
               <Routes>
                  <Route path='/' element={
                     <div className={`${loadComponent} ${loadPage}`}>
                        home
                     </div>
                  } />

                  <Route path='/About' element={<><About></About></>} />
                  <Route path='/Portfolio' element={<><Portfolio></Portfolio></>} />
                  <Route path='/Project' element={<><Project></Project></>} />
               </Routes>
            </section>
         </div>
         
         {/* tail */}
         <Footer></Footer>
      </div>
   )
}

function Header() {

   let [MenuState, setMenuState] = useState('');

   const toggleMenu = () => {
      setMenuState((prev) => (prev === '' ? 'active' : ''));
   }

   return (
      <header>
         <div className='containerV1'>
            <h1 id="logo" className='Gabia'>Nhj Portfolio <span>2024</span></h1>
   
            <div className={`outer ${MenuState}`}>
               <div className="Menu">
                  <Link className={`Pop`} to='/'><span>Home</span></Link>
                  <Link className={`Pop`} to='/About'><span>About</span></Link>
                  <Link className={`Pop`} to='/Portfolio'><span>Portfolio</span></Link>
                  <Link className={`Pop`} to='/Project'><span>Project</span></Link>
               </div>
            </div>

            <button onClick={toggleMenu} className={`mob_btn ${MenuState}`}><span></span></button>
            <div onClick={() => setMenuState('')} className={`mob_screen ${MenuState}`}></div>
         </div>
      </header>
   )
}

function Footer() {
   return (
      <footer>
         <div className='containerV1'>
            <h1 id="ft_logo">Copyright © 2024</h1>
         </div>
      </footer>
   )
}

export default App
