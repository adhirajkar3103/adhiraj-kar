import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './slice/index.ts'

export const store = configureStore({
    reducer:{
        theme: themeReducer
    }
})