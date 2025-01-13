/* eslint-disable */
import '../css/modal.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { useMediaQuery } from "react-responsive";
import ScrollOut from "scroll-out";
import { setClickedValue } from '../store';


// mainscreen 포트폴리오 내용 변경 애니메이션 넣음 (어떻게 할진 좀 더 생각중)
// mainscreen에 불러온 내용이랑 모바일 ui 다시 만들기
// (https://portfoliosj-react.netlify.app/) 여기 프로젝트란 참고.



export function Portfolio() {

   // 포트폴리오 내용
   let Pof_Data = useSelector((state) => state.Pof_Data);

   // 페이지 이동 애니메이션
   let loadComponent = useSelector((state) => state.loadComponent);
   let [loadPage, setPage] = useState('');

   useEffect(() => {
      let loadAni = setTimeout(() => {setPage('loadPage')}, 100);

      return () => {
         clearTimeout(loadAni);
         setPage('');
      }
   }, []);

   useEffect(() => { // scroll 애니메이션
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

   // 모달 (pc, 모바일)
   // pc(mainscreen)
   const dispatch = useDispatch();

   const screenModallClick = (key) => {
      if (key >= 0 && key < Pof_Data.length) {
         dispatch(setClickedValue(key));
      } else {
         console.error("Invalid key:", key);
      }
   };

   // 모바일(개별모달)
   let [modal, setModal] = useState(false);
   let [modalKey, keySet] = useState();

   return (
      <div id="Portfolio" className={`secBox ${loadComponent} ${loadPage}`}>
         <h2>PORTFOLIO</h2>

         <div className="list_container">
            {
               Pof_Data.map(function(item, i) {
                  return (
                     <article className="item" key={i} onClick={()=> {setModal(!modal); keySet(i); screenModallClick(i);}}>
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

export function PofModal() {// pc 모달

   const i = useSelector((state) => state.ModalClickEvent.clickValue);

   // 포트폴리오 내용
   let Pof_Data = useSelector((state) => state.Pof_Data);


   // 애니메이션 상태 및 현재 렌더링할 콘텐츠 상태
   const [isAnimating, setIsAnimating] = useState(false);
   const [PofContent, setPofContent] = useState(null);

   useEffect(() => {
      if (i === null || i >= Pof_Data.length) return;

      // 애니메이션 시작
      setIsAnimating(true);

      // 애니메이션 종료 후 콘텐츠 업데이트
      const timeout = setTimeout(() => {
         setPofContent(Pof_Data[i]?.content || null);
         setIsAnimating(false);
      }, 1100); // 애니메이션 지속 시간 (예: 500ms)

      return () => clearTimeout(timeout); // 클린업 함수
   }, [i, Pof_Data]);

   if (PofContent === null) return null;
   
   return (
      <div id='pof_modal' className={isAnimating ? 'changeAni' : ''} style={{ backgroundImage: `url(${PofContent.img})`}}>
         <div className="form_box">
            <div className="form_content">
               <div className="title_box">
                  <h3>{PofContent.title}</h3>
                  <a href={`${PofContent.url}`} target='_blank'>{PofContent.url}</a>
               </div>

               <div className="text_d">
                  <span className='date'>작업 시기 : {PofContent.create}</span>
                  <span className='involve'>참여도 : {PofContent.involve}</span>
               </div>

               <div className="text_box">
                  <h5 className='i-tit'><i className="fa-solid fa-rocket icon"></i> Description</h5>
                  <p className='text1'>
                     {PofContent.text}
                  </p>
               </div>

               <div className="skill_box">
                  <h5 className='i-tit'>
                     <i className="fa-solid fa-wand-magic-sparkles icon"></i>
                     Library
                  </h5>
                  <ul>
                     {
                        Pof_Data[i].content.skill.map(function(name, j) {
                           return (
                              <li key={j}>- {name}</li>
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

// 모바일 모달
function Modal({item, i, setModal}) {

   // 미디어 쿼리 밑에서만 컴포넌트 실행
   const isMobile = useMediaQuery({ query: "(max-width: 992px)" });
   if (!isMobile) return null;

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

