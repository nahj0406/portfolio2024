/* eslint-disable */
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector } from 'react-redux'

function Project() {

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
         333333
      </div>
   )
}

export default Project;