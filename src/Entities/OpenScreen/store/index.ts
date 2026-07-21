import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open : false,
    key : null
}


let screenSlice = createSlice({
    name : 'OpenScreen',
    initialState,
    reducers : {
        openScreen(state,action){
            state.open = !state.open;
            state.key = action.payload
        }
    }
})


export default screenSlice.reducer
export const { openScreen } = screenSlice.actions

