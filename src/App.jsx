/* eslint-disable */
import { Suspense, useState, useEffect } from 'react'
import {Routes, Route, Link, useLocation} from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
import Lenis from '@studio-freight/lenis';

// pages
import About from './pages/About.jsx'
import {Portfolio, PofModal} from './pages/Portfolio.jsx'
import Project from './pages/Project.jsx'


function App() {


   // mainScreen
   const ScreenLoaction = useLocation();
   let [pageid, idSet] = useState('homeScreen');

   useEffect(() => {
      if(ScreenLoaction.pathname === '/About') {
         idSet('aboutScreen');
      } else if (ScreenLoaction.pathname === '/Portfolio') {
         idSet('pofScreen');
      } else if (ScreenLoaction.pathname === '/Project') {
         idSet('pjScreen');
      } else {
         idSet('homeScreen');
      }
   }, [ScreenLoaction]);
   // mainScreen


   // 페이지 변경시 스크롤 초기화
   const ScrollToTop = () => {
      const { pathname } = useLocation();
      
      useEffect(() => {
         window.scrollTo(0, 0); // 스크롤을 최상단으로 이동
      }, [pathname]);
      
      return null;
   };
   ScrollToTop();
   // 페이지 변경시 스크롤 초기화


   // lenis
   useEffect(() => {
		// Lenis 인스턴스 생성
		const lenis = new Lenis({
			smoothWheel: true,
      	smoothTouch: true,
			wheelMultiplier: 0.7, // 휠 스크롤 속도 감소, 기본값 1
      	touchMultiplier: 2, // 터치 스크롤 속도 증가 기본값 2
		 });

		// 애니메이션 루프 설정
		function raf(time) {
		  lenis.raf(time);
		  requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
  
		// 클린업: Lenis 인스턴스 제거
		return () => {
		  lenis.destroy();
		};
	}, []);
   // lenis


   // 페이지 전환 애니메이션
   let loadComponent = useSelector((state) => state.loadComponent);
   let [loadPage, setPage] = useState('');

   useEffect(() => {
      let loadAni = setTimeout(() => {setPage('loadPage')}, 100);

      return () => {
         clearTimeout(loadAni);
         setPage('');
      }
   }, []);
   // 페이지 전환 애니메이션

   return (
      <div className='App'>
         {/* header */}
         <Header></Header>

         {/* main */}
         <div className="container containerV1">
            <section className="main_screen" id={pageid}>
               {
                  ScreenLoaction.pathname === '/Portfolio' ?
                  <PofModal></PofModal> : null
               }
            </section>
               
            <section className="Routes_Box">
               <Routes>
                  <Route path='/' element={
                     <div className={`${loadComponent} ${loadPage}`}>
                        home
                     </div>
                  } />

                  <Route path='/About' element={<About></About>} />
                  <Route path='/Portfolio' element={<Portfolio></Portfolio>} />
                  <Route path='/Project' element={<Project></Project>} />
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
   const location = useLocation();

   useEffect(() => {
      setMenuState(''); // URL 변경 시 MenuState 초기화
   }, [location]);

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
