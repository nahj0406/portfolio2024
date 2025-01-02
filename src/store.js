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
            title: 'Spliting.js',
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
         title : 'API',
         kakao : {
            title: 'Kakao API', 
            img: './img/kakao_icon.png',
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
   ]
})


// createSlice로 만든 state는 아래에 꼭 등록해야 사용 가능
export default configureStore({
   reducer: {
      loadComponent : loadComponent.reducer,
      set_skill : set_skill.reducer,
   }
})