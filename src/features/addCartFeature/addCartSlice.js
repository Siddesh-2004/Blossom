import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const addCartSlice = createSlice({ name:"items",
    initialState,
    reducers: {
        addItem: (state,action) => {
            const item = { id: nanoid(),
                flowerName: action.payload.flowerName,
                flowerPrice: action.payload.flowerPrice
            }
            state.items.push(item)
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter((item)=>
                item.id!== action.payload
            )
        }
    }
})

export const {addItem,removeItem}=addCartSlice.actions
export default addCartSlice.reducer


