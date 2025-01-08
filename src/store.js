import { configureStore, createSlice } from '@reduxjs/toolkit'

// 페이지 전환 애니메이션
let loadComponent = createSlice({
   name : 'loadComponent',
   initialState : ['stayAni']
})


// About -------------------------------------

let set_skill = createSlice({
   name : 'set_skill',
   initialState : [
      {
         title : 'language',
         html5 : {
            title: ' html5', 
            img: './img/html_icon.png',
         },
         css : {
            title: 'CSS3', 
            img: './img/css_icon.png',
         },
         js : {
            title: 'Javascript', 
            img: './img/js_icon.png',
         },
         php : {
            title: 'PHP', 
            img: './img/php_icon.png',
         },
      },

      {
         title : 'library',
         bootstrap : {
            title: 'Bootstrap',
            img: './img/btsp_icon.png',
         },
         jquery : {
            title: 'Jquery', 
            img: './img/jquery_icon.png',
         },
         gsap : {
            title: 'Gsap', 
            img: './img/gsap_icon.png',
         },
         aos : {
            title: 'AOS.js', 
            img: './img/aos_icon.png',
         },
         split : {
            title: 'Splitting.js',
            img: './img/split_icon.png',
         },
         swiper : {
            title: 'Swiper Slide', 
            img: './img/swiper_icon.png',
         },
         fullpage : {
            title: 'Fullpage.js', 
            img: './img/fullpage_icon.png',
         },
      },

      {
         title : 'Framework',
         react : {
            title: 'REACT', 
            img: './img/react_icon.png',
         },
         gr5 : {
            title: 'Gnuboard',
            img: './img/gr5_icon.png',
         },
      },

      {
         title : 'SCM',
         git : {
            title: 'Git', 
            img: './img/git_icon.png',
         },
         github : {
            title: 'Git hub', 
            img: './img/github_icon.png',
         },
      },

      {
         title : 'Design Tool',
         ps : {
            title: 'Photoshop', 
            img: './img/ps_icon.png',
         },
         Ai : {
            title: 'Illustrator', 
            img: './img/Ai_icon.png',
         },
      },

      {
         title : 'API',
         kakao : {
            title: 'Kakao API', 
            img: './img/kakao_icon.png',
         },
      },
   ]
})

// PortFolio -------------------------------------

let Pof_Data = createSlice({
   name : 'Pof_Data',
   initialState : [
      { // 블루웨일 브루하우스
         name : 'whalebrew',
         title : '블루웨일브루하우스',
         Thum : {
            img : './img/Pof_whalebrew_1.jpg',
         },
         content : {
            img : './img/Pof_whalebrew_2.jpg',
            text : '안녕하세요 브루하우스에요.',
            skill : ['그누보드', 'gsap'],
            url : 'https://whalebrew.kr/',
            involve : '100%',
            since : '2024',
         }

      },

      { // 연세대시각디자인과
         name : 'dcaf',
         title : '연세대시각디자인과 졸업전시회',
         Thum : {
            img : './img/Pof_yydshow_1.jpg',
         },
         content : {
            img : './img/Pof_yydshow_2.jpg',
            text : '연세대시각디자인과 2023 졸업전시회에요.',
            skill : ['그누보드', 'gsap', 'splitting.js', 'Lenis.js'],
            url : 'https://yydshow23.iwinv.net/',  
            involve : '100%',
            since : '2023',
         }

      },

      { // 대전문화재단
         name : 'dcaf',
         title : '대전문화재단',
         Thum : {
            img : './img/Pof_seeart_1.jpg',
         },
         content : {
            img : './img/Pof_seeart_2.jpg',
            text : '안녕하세요 대전문화재단이에요.',
            skill : ['그누보드', 'gsap'],
            url : 'https://whalebrew.kr/',  
            involve : '40%',
            since : '2022',
         }

      },
   ]
})


// createSlice로 만든 state는 아래에 꼭 등록해야 사용 가능
export default configureStore({
   reducer: {
      loadComponent : loadComponent.reducer,
      set_skill : set_skill.reducer,
      Pof_Data : Pof_Data.reducer,
   }
})