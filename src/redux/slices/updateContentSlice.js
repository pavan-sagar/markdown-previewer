import { createSlice } from '@reduxjs/toolkit'

const updateContentSlice = createSlice({
    name:'updateContent',
    initialState: { content:''},
    reducers:{
        updateContent(state=this.initialState,action){
            state.content = action.payload.content;
            
        }
    }
});

export const updateContentReducer = updateContentSlice.reducer;
export const { updateContent } = updateContentSlice.actions;