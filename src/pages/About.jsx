/* eslint-disable */
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {useSelector } from 'react-redux'
import Splitting from 'splitting';
import ScrollOut from "scroll-out";

function About() {

   let loadComponent = useSelector((state) => state.loadComponent);
   let set_skill = useSelector((state) => state.set_skill);

   let [loadPage, setPage] = useState('');

   const certi = [
      {title : '웹디자인기능사', date : '2020'},
      {title : 'GTQ포토샵1급', date : '2020'},
   ]

   let [Tab, SetTab] = useState(0);

   const handleTabMenu = (index) => {
      SetTab(index);
   }

   useEffect(() => {
      let loadAni = setTimeout(() => {setPage('loadPage')}, 100);

      Splitting(); // split 초기화 실행

      return () => {
         clearTimeout(loadAni);
         setPage('');
      }
   }, []);

   useEffect(() => {
      const scrollOutInstance = ScrollOut({
         targets: ".scAni",
         threshold: 0.5,
         once: true, // 요소가 한 번만 감지되도록 설정
         onShown: function (el) {
            // 요소가 뷰포트에 들어왔을 때 실행
            const elements = Array.from(document.querySelectorAll(".scAni"));
            const index = elements.indexOf(el);

            const isWideScreen = window.innerWidth <= 1920 && window.innerWidth >= 768;
            const delay = isWideScreen
            ? (index >= 4 ? 100 : index * 700)
            : index * 200;

            setTimeout(() => {
            el.classList.add("animate"); // 순차적으로 animate 클래스 추가
            }, delay);
         },
      });

      return () => {
         scrollOutInstance.teardown(); // ScrollOut 인스턴스 정리
      };
   }, []);
    
    

    

   return (
      <div id="About" className={`secBox ${loadComponent} ${loadPage}`}>
         <section className="gridBox">
            <dl className="gr_item scAni">
               <dt className="title-line">
                  <h2 className='' data-splitting>About Me</h2>
                  <div className="line"></div>
               </dt>

               <dd className="text_box">
                  <p className='text1 Prtd char-txt' data-splitting>
                     안녕하세요. 웹퍼블리셔 나현종이라고 합니다. <br />
                     웹 애니메이션 기술을 다양하게 응용할 수 있는 인터렉티브앱에 관심이 있으며, <br />
                     장기적인 목표로 프론트엔드 개발자에 관한 내용과 node.js를 이용한 자바스크립트 <br /> 
                     백엔드 구현에도 흥미를 느끼고 공부하고 있습니다.</p>
               </dd>
            </dl>

            <dl className="gr_item scAni">
               <dt className="title-line">
                  <h2 className='' data-splitting>Education</h2>
                  <div className="line"></div>
               </dt>

               <dd className='contt'>
                  <ul className="list">
                     <li>
                        <div className="list_tit">
                           <h4><span></span> <b>대전 그린컴퓨터아트학원</b></h4>
                           <span className='tit_label date'>2020.10 ~ 2021.02</span>
                           <span className='tit_label'>디지털디자인(웹디자이너, 웹퍼블리셔) 양성과정</span>
                        </div>
                        <p className='text1 Prtd ' data-splitting>
                           ui/ux디자인을 구성 설계하고, html5, css3, javascript를 활용한 기업형 웹사이트, 모바일 웹, 반응형 웹 페이지
                           를 구현하는 교육과정을 이수했습니다.
                        </p>
                     </li>
                  </ul>
               </dd>
            </dl>

            <dl className="gr_item scAni">
               <dt className="title-line">
                  <h2 className='' data-splitting>career</h2>
                  <div className="line"></div>
               </dt>

               <dd className='contt'>
                  <ul className="list">
                     <li>
                        <div className="list_tit">
                           <h4><span></span> <b>아이케이 웹에이전시</b></h4>
                           <span className='tit_label date'>2022.03 ~ 2024.07</span>
                           <span className="tit_label">웹퍼블리셔</span>
                           <span className="tit_label">인수합병으로 인한 사직</span>
                        </div>
                        <p className='text1 Prtd ' data-splitting>
                           3개월의 수습기간 이후 정규직으로 전환한 뒤 기업, 공공기관, 프렌차이즈, 공모전 등 여러가지 프로젝트를 
                           그누보드를 토대로 메인 퍼블리싱과 그누보드 영카트 쇼핑몰, 약간의 php 개발 등을 함께 맡아 작업하였습니다.
                        </p>
                     </li>
                  </ul>
               </dd>
            </dl>

            <dl className="gr_item scAni">
               <dt className="title-line">
                  <h2 className='' data-splitting>certificate</h2>
                  <div className="line"></div>
               </dt>

               <dd className='contt'>
                  <ul className="list">
                     {
                        certi.map(function(a, i) {
                           return (
                              <Certi_list key={i} i={i} skill ={a}></Certi_list>
                           )
                        })
                     }
                  </ul>
               </dd>
            </dl>

            <dl className="gr_item scAni">
               <dt className="title-line">
                  <h2 className='' data-splitting>Skill</h2>
                  <div className="line"></div>
               </dt>

               <dd className='contt contt-t2'>
                  <ul className="list_ty2">
                  {
                     set_skill.map((skillGroup, index) => (
                        <Skill_list 
                           key={index}
                           i={index}
                           name={skillGroup}
                           isActive={Tab === index}
                           onClick={() => handleTabMenu(index)}
                        />
                     ))
                  }
                  </ul>
               </dd>
            </dl>
         </section>
      </div>
   )
}

function Certi_list(props) {
   return (
      <li>
         <div className="list_tit">
            <h4 className='ft_400'><span></span>{props.skill.title}</h4>
            
            {props.skill.date ? <span className='tit_label date'>{props.skill.date}</span> : false}
         </div>
      </li>
   )
}


function Skill_list({ name, isActive, onClick, i }) {

   return (
      <li className={`${isActive ? 'active' : ''}`}>
         <div className='skill_tit'>
            <h3 onClick={onClick}>{name.title}</h3>
         </div>
         <ul>
            {
               Object.keys(name).map((key, index) => {
                  if (typeof name[key] === "object") {
                     return (
                        <li key={index}>
                           <figure className='img'>
                              <img src={name[key].img} alt={name[key].title} />
                           </figure>
                           <span className=''>{name[key].title}</span>
                        </li>
                     );
                  }
                  return null;
               })
            }
         </ul>
      </li>
   );
}

export default About;