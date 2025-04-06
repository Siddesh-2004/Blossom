import {configureStore} from '@reduxjs/toolkit'
import  addCartSliceReducer  from '../features/addCartFeature/addCartSlice'

export const store = configureStore({
    reducer:addCartSliceReducer 
})
 


