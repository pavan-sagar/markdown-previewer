import { createSlice } from '@reduxjs/toolkit'

const maximiseWindowSlice = createSlice({

    name:'maximiseWindow',

    initialState:{
        editorIsMaximised:false,
        previewerIsMaximised:false,
    },

    reducers:{

        toggleWindowSize(state=this.initialState,action){
            
            action.payload.windowName == 'editor' ? 
                state.editorIsMaximised = action.payload.windowIsMaximised :
            state.previewerIsMaximised = action.payload.windowIsMaximised;

            console.table(state.editorIsMaximised,state.previewerIsMaximised);
        }
    }
});

export const maximiseWindowReducer =  maximiseWindowSlice.reducer;
export const { toggleWindowSize } = maximiseWindowSlice.actions;