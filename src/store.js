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

let ModalClickEvent = createSlice({
   name : 'ModalClickEvent',
   initialState : {clickValue: null,},
   reducers: {
      setClickedValue: (state, action) => {
         state.clickValue = action.payload;
      },
   },
})


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
            title : '블루웨일브루하우스',
            img : './img/Pof_whalebrew_2.jpg',
            text : '그누보드로 세팅하여 작업한 크래프트맥주회사 홈페이지입니다. 청량감을 요구하여 단기간에 전체적인 효과 등에 그런 점들을 부각하려 노력했습니다.',
            skill : ['그누보드', 'Swiper', 'Jquery', 'Scroll-Out'],
            url : 'https://whalebrew.kr/',
            involve : '100%',
            create : '2024',
         }

      },

      { // 연세대시각디자인과
         name : 'dcaf',
         title : '연세대시각디자인과 졸업전시회',
         Thum : {
            img : './img/Pof_yydshow_1.jpg',
         },
         content : {
            title : '연세대시각디자인과 졸업전시회',
            img : './img/Pof_yydshow_2.jpg',
            text : '연세대시각디자인과 2023 졸업전시회 홈페이지로 gsap와 splitting 등의 인터렉티브 라이브러리를 활용하여 고객이 요구하는 애니메이션 효과에 집중했습니다.',
            skill : ['그누보드','gsap', 'splitting.js', 'Lenis.js'],
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
            title : '대전문화재단',
            img : './img/Pof_seeart_2.jpg',
            text : '예술인을 후원하는 대전문화재단 씨앗 홈페이지입니다. 후원자를 받은 입력폼과 문의사항, 후원자들의 정보를 표기하는 게시판등의 커스텀을 작업했습니다.',
            skill : ['그누보드', 'Swiper', 'Jquery'],
            url : 'https://whalebrew.kr/',  
            involve : '40%',
            since : '2022',
         }

      },

      { // 헤리티지1
         name : 'dcaf',
         title : '헤리티지 스테이',
         Thum : {
            img : './img/Pof_hanyu_1.jpg',
         },
         content : {
            title : '헤리티지 스테이',
            img : './img/Pof_hanyu_2.jpg',
            text : '한유에너지의 헤리티지 브랜드를 소개하는 홈페이지입니다.',
            skill : ['그누보드', 'Swiper', 'scroll-Out'],
            url : 'https://hanyuheritage.com/',  
            involve : '100%',
            since : '2023',
         }

      },

      { // 헤리티지2
         name : 'dcaf',
         title : '헤리티지 카니발',
         Thum : {
            img : './img/Pof_hanyu2_1.jpg',
         },
         content : {
            title : '헤리티지 카니발',
            img : './img/Pof_hanyu2_2.jpg',
            text : '한유에너지 헤리티지 브랜드의 카니발을 소개하는 웹사이트입니다.',
            skill : ['그누보드', 'Swiper', 'Lenis', 'scroll-Out'],
            url : 'https://heritagehanyu.com/',  
            involve : '100%',
            since : '2024',
         }

      },

      { // 삼주
         name : 'samjoo',
         title : '주식회사 삼주',
         Thum : {
            img : './img/Pof_samjoo_1.jpg',
         },
         content : {
            title : '주식회사 삼주',
            img : './img/Pof_samjoo_2.jpg',
            text : '무기화학약품을 제조 및 판매하는 화학기업 홈페이지입니다. fullpage 라이브러리를 활용한 화면전환이 적용되었습니다.',
            skill : ['그누보드', 'fullpage', 'Swiper', 'scroll-Out'],
            url : 'https://www.samjoo.or.kr/',  
            involve : '100%',
            since : '2024',
         }

      },

      { // 광교바이오
         name : 'gbw',
         title : '광교 바이오주간',
         Thum : {
            img : './img/Pof_gbw_1.jpg',
         },
         content : {
            title : '광교 바이오주간',
            img : './img/Pof_gbw_2.jpg',
            text : '광교바이오 이노베이션밸리 추진협의체 행사 홈페이지입니다. 주요 행사 등록 내용등은 그누보드에 탑재된 php 기반 게시판 기능을 커스텀 하여 작업하였습니다.',
            skill : ['그누보드', 'Lenis', 'Swiper', 'scroll-Out'],
            url : 'https://www.samjoo.or.kr/',  
            involve : '100%',
            since : '2024',
         }

      },

      { // 앤에스월드
         name : 'gbw',
         title : '앤에스월드',
         Thum : {
            img : './img/Pof_nsworld_1.jpg',
         },
         content : {
            title : '앤에스월드',
            img : './img/Pof_nsworld_2.jpg',
            text : '산업 전반 분야 제품을 제조하는 회사 홈페이지로 fullpage 라이브러리를 사용하여 스크린 전환 형태를 띄고 있습니다.',
            skill : ['그누보드', 'fullpage', 'Swiper', 'scroll-Out'],
            url : 'https://nsworld.kr',  
            involve : '100%',
            since : '2024',
         }

      },

      { // 튼튼동물의료센터
         name : 'ttamc',
         title : '튼튼동물의료센터',
         Thum : {
            img : './img/Pof_ttamc_1.jpg',
         },
         content : {
            title : '튼튼동물의료센터',
            img : './img/Pof_ttamc_2.jpg',
            text : '동물의료센터 홈페이지입니다.',
            skill : ['그누보드', 'Swiper', 'Jquery', 'Scroll-Out'],
            url : 'https://www.ttamc.co.kr/',
            involve : '100%',
            create : '2023',
         }

      },

      { // 청호불교문화원
         name : 'chbuddha',
         title : '청호불교문화원',
         Thum : {
            img : './img/Pof_chbu_1.jpg',
         },
         content : {
            title : '청호불교문화원',
            img : './img/Pof_chbu_2.jpg',
            text : '재단법인 청호불교문화원 홈페이지입니다.',
            skill : ['그누보드', 'Swiper', 'Jquery', 'Scroll-Out'],
            url : 'https://www.chbuddha.com/',
            involve : '100%',
            create : '2022',
         }

      },

      { // 캣캣캣
         name : 'catcat',
         title : '캣캣캣',
         Thum : {
            img : './img/Pof_cat_1.jpg',
         },
         content : {
            title : '캣캣캣',
            img : './img/Pof_cat_2.jpg',
            text : '고양이 분양 전문샵 캣캣캣 홈페이지입니다.',
            skill : ['그누보드', 'Swiper', 'Jquery'],
            url : 'https://catcatcat.co.kr/',
            involve : '100%',
            create : '2022',
         }

      },

      { // 잰153
         name : 'jan153',
         title : '잰153',
         Thum : {
            img : './img/Pof_jan_1.jpg',
         },
         content : {
            title : '잰153',
            img : './img/Pof_jan_2.jpg',
            text : '식물농약 전문회사 잰153의 홈페이지입니다.',
            skill : ['그누보드', 'Swiper', 'Jquery'],
            url : 'https://jan153biotech.kr/',
            involve : '100%',
            create : '2022',
         }

      },

      { // 지원피앤피
         name : 'bestwon',
         title : '법무법인 지원피앤피',
         Thum : {
            img : './img/Pof_bestwon_1.jpg',
         },
         content : {
            title : '법무법인 지원피앤피',
            img : './img/Pof_bestwon_2.jpg',
            text : '법률사무소 법무법인 지원피앤피의 홈페이지입니다.',
            skill : ['그누보드', 'Swiper', 'Jquery'],
            url : 'https://www.bestgwon.com/',
            involve : '90%',
            create : '2023',
         }

      },

      { // 서림정보통신
         name : 'seolim',
         title : '서림정보통신',
         Thum : {
            img : './img/Pof_seolim_1.jpg',
         },
         content : {
            title : '서림정보통신',
            img : './img/Pof_seolim_2.jpg',
            text : '공공기관 정보시스템과 인프라를 구축하고 운영, 유지보수하는 기업입니다.',
            skill : ['그누보드', 'Swiper', 'Jquery'],
            url : 'https://www.seolimict.co.kr/',
            involve : '100%',
            create : '2022',
         }

      },
   ]
})


export const { setClickedValue } = ModalClickEvent.actions;

// createSlice로 만든 state는 아래에 꼭 등록해야 사용 가능
export default configureStore({
   reducer: {
      loadComponent : loadComponent.reducer,
      set_skill : set_skill.reducer,
      Pof_Data : Pof_Data.reducer,
      ModalClickEvent : ModalClickEvent.reducer,
   }
})