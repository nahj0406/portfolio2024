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
            create : '2023',
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
            create : '2022',
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
            create : '2023',
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
            create : '2024',
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
            create : '2024',
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
            create : '2024',
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
            create : '2024',
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

      { // 오케이동물병원
         name : 'okanimal',
         title : '오케이동물메디컬센터',
         Thum : {
            img : './img/Pof_okanimal_1.jpg',
         },
         content : {
            title : '오케이동물메디컬센터',
            img : './img/Pof_okanimal_2.jpg',
            text : '24시 오케이동물메디컬센터 홈페이지입니다.',
            skill : ['그누보드', 'Swiper', 'Jquery'],
            url : 'https://okanimal.iwinv.net/',
            involve : '100%',
            create : '2023',
         }

      },

      { // 이노펫
         name : 'innopet',
         title : '이노펫',
         Thum : {
            img : './img/Pof_innopet_1.jpg',
         },
         content : {
            title : '이노펫',
            img : './img/Pof_innopet_2.jpg',
            text : '반려동물 제품을 연구개발, 제조하는 기업 사이트로 원페이지 형식으로 기획되었습니다.',
            skill : ['그누보드', 'Swiper', 'Jquery'],
            url : 'https://innopet.kr/',
            involve : '100%',
            create : '2023',
         }

      },

      { // 오토엑스포트
         name : 'autoex',
         title : '오토엑스포트',
         Thum : {
            img : './img/Pof_autoex_1.jpg',
         },
         content : {
            title : '오토엑스포트',
            img : './img/Pof_autoex_2.jpg',
            text : '중고차 및 차량부품 수출전문 기업 사이트입니다.',
            skill : ['그누보드', 'Swiper', 'Jquery'],
            url : 'https://www.autoexport.kr/',
            involve : '100%',
            create : '2023',
         }

      },

      { // 에이치엔에프
         name : 'hnf',
         title : '에이치엔에프',
         Thum : {
            img : './img/Pof_hnf_1.jpg',
         },
         content : {
            title : '에이치엔에프',
            img : './img/Pof_hnf_2.jpg',
            text : '진공펌프 수리 및 유지보수 업체로 fullpage.js를 사용하여 전체화면 스크롤링 효과로 방문객들의 페이지 집중도를 높일 수 있도록 기획되었습니다.',
            skill : ['그누보드', 'Swiper', 'Jquery', 'fullpage'],
            url : 'https://hnfvac.com/',
            involve : '100%',
            create : '2023',
         }

      },

      { // 아트월드
         name : 'artworld',
         title : '아트월드',
         Thum : {
            img : './img/Pof_artworld_1.jpg',
         },
         content : {
            title : '아트월드',
            img : './img/Pof_artworld_2.jpg',
            text : '세종시에 있는 전문디자인업체로 심플한 디자인에 맞춰서 퍼블리싱 작업을 진행하였습니다.',
            skill : ['그누보드', 'Swiper', 'Jquery',],
            url : 'https://www.s-artworld.com/',
            involve : '100%',
            create : '2023',
         }

      },

      { // 한국인증협회
         name : 'ikca',
         title : '한국인증협회',
         Thum : {
            img : './img/Pof_ikca_1.jpg',
         },
         content : {
            title : '한국인증협회',
            img : './img/Pof_ikca_2.jpg',
            text : 'ESG인증, ISO인증, 경영인증 등을 기반으로 하는 경영 컨설팅 업체입니다.',
            skill : ['그누보드', 'Swiper', 'Jquery',],
            url : 'https://www.ikca.kr/',
            involve : '100%',
            create : '2023',
         }

      },

      { // 엠아이티코리아
         name : 'mit',
         title : '엠아이티코리아',
         Thum : {
            img : './img/Pof_mit_1.jpg',
         },
         content : {
            title : '엠아이티코리아',
            img : './img/Pof_mit_2.jpg',
            text : '자동차 관련 시험설비와 부품을 제조하는 업체로 fullpage.js를 사용하여 전체 스크롤링 페이지를 구현하였습니다.',
            skill : ['그누보드', 'Swiper', 'Jquery', 'fullpage'],
            url : 'https://www.mitkorea56.co.kr/',
            involve : '100%',
            create : '2023',
         }

      },

      { // 제이솔루션
         name : 'jsol',
         title : '제이솔루션',
         Thum : {
            img : './img/Pof_jsol_1.jpg',
         },
         content : {
            title : '제이솔루션',
            img : './img/Pof_jsol_2.jpg',
            text : 'LG화학 기계장비 전문설치 및 정비를 담당하는 전문기업 홈페이지로 fullpage.js를 사용하여 전체 스크롤링 페이지 형식으로 구현되었습니다.',
            skill : ['그누보드', 'Swiper', 'Jquery', 'fullpage', 'Scroll-out'],
            url : 'https://jsolution2017.kr/',
            involve : '100%',
            create : '2024',
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