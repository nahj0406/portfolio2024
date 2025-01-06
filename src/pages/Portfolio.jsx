/* eslint-disable */
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector } from 'react-redux'

function Portfolio() {

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
      <div id="Portfolio" className={`secBox ${loadComponent} ${loadPage}`}>
         <h2>PORTFOLIO</h2>

         <div className="list_container">
            <article className="item">
               1
               <div className="img_frame"></div>
            </article>

            <article className="item">
               2
               <div className="img_frame"></div>
            </article>

            <article className="item">
               3
               <div className="img_frame"></div>
            </article>

            <article className="item">
               3
               <div className="img_frame"></div>
            </article>

            <article className="item">
               3
               <div className="img_frame"></div>
            </article>
         </div>
      </div>
   )
}

export default Portfolio;