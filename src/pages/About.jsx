/* eslint-disable */
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector } from 'react-redux'

function About() {

   let loadComponent = useSelector((state) => state.loadComponent);

   let [loadPage, setPage] = useState('');

   const certi = [
      {title : '웹디자인기능사', date : '2020'}, 
      {title : 'GTQ포토샵1급', date : '2020'}, 
      {title : '정보처리산업기사(실기 준비중)'}
   ]

   useEffect(() => {
      let loadAni = setTimeout(() => {setPage('loadPage')}, 100);

      return () => {
         clearTimeout(loadAni);
         setPage('');
      }
   }, []);

   return (
      <div id="About" className={`${loadComponent} ${loadPage}`}>
         <section className="gridBox">
            <dl className="gr_item">
               <dt className="title-line">
                  <h2>About Me</h2>
                  <div className="line"></div>
               </dt>

               <dd className="text_box">
                  <p>
                     안녕하세요. 웹퍼블리셔 나현종이라고 합니다. <br />
                     웹 애니메이션 기술을 다양하게 응용할 수 있는 인터렉티브앱에 관심이 있으며, <br />
                     장기적인 목표로 프론트엔드 개발자에 관한 내용과 node.js를 이용한 자바스크립트 <br /> 
                     백엔드 구현에도 흥미를 느끼고 공부하고 있습니다.</p>
               </dd>
            </dl>

            <dl className="gr_item">
               <dt className="title-line">
                  <h2>Education</h2>
                  <div className="line"></div>
               </dt>

               <dd>
                  <ul className="list">
                     <li>
                        <div className="list_tit">
                           <h4><span></span> 대전 그린컴퓨터아트학원</h4>
                           <span>2020.10 ~ 2021.02</span>
                           <span>디지털디자인(웹디자이너, 웹퍼블리셔) 양성과정</span>
                        </div>
                        <p>
                           ui/ux디자인을 구성 설계하고, html5, css3, javascript를 활용한 기업형 웹사이트, 모바일 웹, 반응형 웹 페이지
                           를 구현하는 교육과정을 이수했습니다.
                        </p>
                     </li>
                  </ul>
               </dd>
            </dl>

            <dl className="gr_item">
               <dt className="title-line">
                  <h2>career</h2>
                  <div className="line"></div>
               </dt>

               <dd>
                  <ul className="list">
                     <li>
                        <div className="list_tit">
                           <h4><span></span> 아이케이 웹에이전시</h4>
                           <span>2022.03 ~ 2024.07</span>
                           <span className="">웹퍼블리셔</span>
                           <span className="">인수합병으로 인한 사직</span>
                        </div>
                        <p>
                           3개월의 수습기간 이후 정규직으로 전환한 뒤 기업, 공공기관, 프렌차이즈, 공모전 등 여러가지 프로젝트를 
                           그누보드를 토대로 메인 퍼블리싱과 그누보드 영카트 쇼핑몰, 약간의 php 개발 등을 함께 맡아 작업하였습니다.
                        </p>
                     </li>
                  </ul>
               </dd>
            </dl>

            <dl className="gr_item">
               <dt className="title-line">
                  <h2>certificate</h2>
                  <div className="line"></div>
               </dt>

               <dd>
                  <ul className="list">
                     {
                        certi.map(function(a, i) {
                           return (
                              <Skill_list key={i} i={i} skill ={a}></Skill_list>
                           )
                        })
                     }
                  </ul>
               </dd>
            </dl>

            <dl className="gr_item">
               <dt className="title-line">
                  <h2>Skill</h2>
                  <div className="line"></div>
               </dt>
            </dl>
         </section>
      </div>
   )
}

function Skill_list(props) {
   return (
      <li>
         <div className="list_tit">
            <h4><span></span>{props.skill.title}</h4>
            
            {props.skill.date ? <span>{props.skill.date}</span> : false}
         </div>
      </li>
   )
}

export default About;