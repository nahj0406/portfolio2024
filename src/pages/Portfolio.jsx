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


   let [modal, setModal] = useState(false);
   let [modalKey, keySet] = useState();

   return (
      <div id="Portfolio" className={`secBox ${loadComponent} ${loadPage}`}>
         <h2>PORTFOLIO</h2>

         <div className="list_container">
            {
               Pof_Data.map(function(item, i) {
                  return (
                     <article className="item" key={i} onClick={()=> {setModal(!modal); keySet(i)}}>
                        <div className="img_frame" style={{ backgroundImage: `url(${item.Thum.img})` }}></div>
                        <div className="title_box">
                           {item.title}
                        </div>
                     </article>
                  )
               })
            }
         </div>

         { // 모달
            modal == true ? <Modal item={Pof_Data} i={modalKey} setModal={setModal}></Modal> : null
         }
      </div>
   )
}

function Modal({item, i, setModal}) {
   return (
      <div id='item_modal'>
         <div className="close_bg" onClick={()=> setModal(false)}></div>
         <div className="form_box">
            <button className='close_btn' onClick={()=> setModal(false)}>
               <i className="fa-regular fa-circle-xmark"></i>
            </button>
            
            <div className="img_frame" style={{ backgroundImage: `url(${item[i].content.img})` }}></div>
            <div className="form_content">
               <div className="title_box">
                  <h3>{item[i].title}</h3>
                  <a href={`${item[i].content.url}`} target='_blank'>{item[i].content.url}</a>
               </div>

               <div className="text_d">
                  <span className='date'>작업 시기 : {item[i].content.create}</span>
                  <span className='involve'>참여도 : {item[i].content.involve}</span>
               </div>

               <div className="text_box">
                  <h5 className='i-tit'><i className="fa-solid fa-rocket icon"></i> Description</h5>
                  <p className='text1'>
                     {item[i].content.text}
                  </p>
               </div>

               <div className="skill_box">
                  <h5 className='i-tit'>
                     <i className="fa-solid fa-wand-magic-sparkles icon"></i>
                     Library
                  </h5>
                  <ul>
                     {
                        item[i].content.skill.map(function(name, i) {
                           return (
                              <li key={i}>- {name}</li>
                           )
                        })
                     }
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Portfolio;