import { configureStore, createSlice } from '@reduxjs/toolkit'

// 페이지 전환 애니메이션
let loadComponent = createSlice({
   name : 'loadComponent',
   initialState : ['stayAni']
})

let set_skill = createSlice({
   name : 'set_skill',
   initialState : [
      {
         html5 : {
            title: 'html5', 
            img: './img/html_icon.png',
         },
         css : {
            title: 'css', 
            img: './img/css_icon.png',
         },
         js : {
            title: 'javascript', 
            img: './img/js_icon.png',
         },
      },

      {
         jquery : {
            title: 'jquery', 
            img: './img/jquery_icon.png',
         },
         react : {
            title: 'react', 
            img: './img/react_icon.png',
         },
         gsap : {
            title: 'gsap', 
            img: './img/gsap_icon.png',
         },
         swiper : {
            title: 'swiper Slide', 
            img: './img/swiper_icon.png',
         },
         fullpage : {
            title: 'fullpage.js', 
            img: './img/fullpage_icon.png',
         },
      },

      {
         php : {
            title: 'php', 
            img: './img/php_icon.png',
         },
         gr5 : {
            title: 'gnuboard',
            img: './img/gr5_icon.png',
         },
      },

      {
         ps : {
            title: 'photoshop', 
            img: './img/ps_icon.png',
         },
         Ai : {
            title: 'illustrator', 
            img: './img/Ai_icon.png',
         },
      },

      {
         git : {
            title: 'git', 
            img: './img/git_icon.png',
         },
         bootstrap : {
            title: 'bootstrap',
            img: './img/btsp_icon.png',
         },
      }
   ]
})


// createSlice로 만든 state는 아래에 꼭 등록해야 사용 가능
export default configureStore({
   reducer: {
      loadComponent : loadComponent.reducer,
      set_skill : set_skill.reducer,
   }
})