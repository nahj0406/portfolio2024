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
      <div className={`${loadComponent} ${loadPage}`}>
         222222
      </div>
   )
}

export default Portfolio;