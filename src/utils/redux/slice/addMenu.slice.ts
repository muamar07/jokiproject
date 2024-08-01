import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
    id : '',
    name : '',
    description : '',
    url : ''
}

const addMenuSlice = createSlice ({
    name : 'addMenu',
    initialState,
    reducers : {
        setMenuInput : (state, action: PayloadAction<any>) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.description = action.payload.description
            state.url = action.payload.url
        },
        setNameMenu : (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setDescription : (state, action: PayloadAction<string>) => {
            state.description = action.payload
        },
        setUrl : (state, action: PayloadAction<string>) => {
            state.url = action.payload
        },
        resetMenu : (state) => {
            state.id = ''
            state.name = ''
            state.description = ''
            state.url = ''
        }
    }
})

export const {setMenuInput, setNameMenu, setDescription, setUrl, resetMenu} =
    addMenuSlice.actions

export const addMenuReducer = addMenuSlice.reducer

