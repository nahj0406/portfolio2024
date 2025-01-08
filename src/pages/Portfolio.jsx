/* eslint-disable */
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector } from 'react-redux'

function Portfolio() {

   let loadComponent = useSelector((state) => state.loadComponent);
   let Pof_Data = useSelector((state) => state.Pof_Data);

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
            {
               Pof_Data.map(function(a, i) {
                  return (
                     <PofItem key={i} i={i} Item={a}></PofItem>
                  )
               })
            }
         </div>
      </div>
   )
}


function PofItem({Item, i}) {
   return (
      <article className="item">
         <div className="img_frame" style={{ backgroundImage: `url(${Item.Thum.img})` }}></div>
         <div className="title_box">
            {Item.title}
         </div>
      </article>
   )
}

export default Portfolio;