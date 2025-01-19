/* eslint-disable */
import {useState, useEffect} from 'react';
import '../css/modal.css';
import axios from 'axios';
import {useSelector } from 'react-redux'
import ScrollOut from "scroll-out";

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

   useEffect(() => {
      const scrollOutInstance = ScrollOut({
         targets: ".list_container .item",
         threshold: 0.5,
         once: true, // 요소가 한 번만 감지되도록 설정
         onShown: function (el) {
            // 요소가 뷰포트에 들어왔을 때 실행
            const elements = Array.from(document.querySelectorAll(".list_container .item"));
            const index = elements.indexOf(el);
            const delay = index * 70;

            setTimeout(() => {
            el.classList.add("On"); // 순차적으로 클래스 추가
            }, delay);
         },
      });

      return () => {
         scrollOutInstance.teardown(); // ScrollOut 인스턴스 정리
      };
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

   const [modalAni, setModalAni] = useState(false);

   useEffect(() => {// 모달이 열릴때 작동
      setModalAni(true);
      return () => setModalAni(false);
    }, []);

   return (
      <div id='item_modal' className='pof_modal'>
         <div className="close_bg" onClick={()=> setModal(false)}></div>
         <div className={`${modalAni ? 'active' : ''} form_box`}>
            <button className='close_btn' onClick={()=> setModal(false)}>
               <i className="fa-regular fa-circle-xmark"></i>
            </button>
            
            <div className="form_content">
               <div className="title_box">
                  <h3 className='Galmuri'>{item[i].title}</h3>
               </div>

               <div className="text_d">
                  <span className='date Galmuri'><b>작업 시기 :</b> {item[i].content.create}</span>
                  <span className='involve Galmuri'><b>참여도 :</b> {item[i].content.involve}</span>
               </div>

               <div className="skill_box">
                  <h5 className='i-tit Galmuri'>
                     <i className="fa-solid fa-wand-magic-sparkles icon"></i>
                     Library
                  </h5>
                  <ul>
                     {
                        item[i].content.skill.map(function(name, i) {
                           return (
                              <li className='Galmuri' key={i}>- {name}</li>
                           )
                        })
                     }
                  </ul>
               </div>

               <div className="text_box">
                  <h5 className='i-tit Galmuri'><i className="fa-solid fa-rocket icon"></i> Description</h5>
                  <p className='text1 Galmuri'>
                     {item[i].content.text}
                  </p>
               </div>
            </div>

            <div className="img_frame" style={{ backgroundImage: `url(${item[i].content.img})` }}></div>
            <a className='link Galmuri' href={`${item[i].content.url}`} target='_blank'>보기</a>
         </div>
      </div>
   )
}

export default Portfolio;