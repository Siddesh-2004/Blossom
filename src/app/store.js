import {configureStore} from '@reduxjs/toolkit'
import  addCartSliceReducer  from '../features/addCartFeature/addCartSlice'
import loginSliceReducer from '../features/loginCartFeature/loginCartSlice'

export const store = configureStore({
    reducer:{
        addCart:addCartSliceReducer ,
        login:loginSliceReducer
    }
    
})
 


