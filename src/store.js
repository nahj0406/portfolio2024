import { configureStore, createSlice } from '@reduxjs/toolkit'

// 공용
let naviTitle = createSlice({
   name : 'naviTitle',
   initialState : ['MAIN', 'PORTFOLIO', 'GITHUB']
   // `I'AM...`, 
})


// createSlice로 만든 state는 아래에 꼭 등록해야 사용 가능
export default configureStore({
   reducer: {
      naviTitle : naviTitle.reducer,
   }
})