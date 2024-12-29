import { Suspense, useState, useEffect } from 'react'
import {Routes, Route, Link, useLocation} from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
// pages
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Project from './pages/Project.jsx'

// gsap, lenis 세팅하기
// react-query 할거면 다시 보고 세팅하기 설치는 했음

function App() {

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
   return (
      <header>
         <div className='containerV1'>
            <h1 id="logo">Na HYeOn JOng</h1>
   
            <div className="Menu">
               <Link className={``} to='/'><span>Home</span></Link>
               <Link className={``} to='/About'><span>About</span></Link>
               <Link className={``} to='/Portfolio'><span>Portfolio</span></Link>
               <Link className={``} to='/Project'><span>Project</span></Link>
            </div>
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
