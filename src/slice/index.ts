import {createSlice} from '@reduxjs/toolkit'


export const themeSlice = createSlice({
    name:'theme',
    initialState:{
        theme: 'retro'
    },
    reducers:{
        switchTheme: (state)=>{
            if(state.theme=='retro'){
                state.theme = 'dark';
            }else{
                state.theme = 'retro';
            }
        }
    }
})

export const {switchTheme} = themeSlice.actions;
export default themeSlice.reducer;