import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
    id : '',
    name : '',
    description : '',
    url : ''
}

const addGallerySlice = createSlice({
    name: 'addGallery',
    initialState,
    reducers : {
        setGalleryInput : (state, action: PayloadAction<any>) => {
            state.id = action.payload.id,
            state.name = action.payload.name,
            state.description = action.payload.description,
            state. url = action.payload.url
        },
        setNameGallery : (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setDescriptionGallery: (state, action: PayloadAction<string>) => {
            state.description = action.payload
        },
        setUrlGallery: (state, action: PayloadAction<string>) =>{
            state.url = action.payload
        },
        resetGallery : (state) => {
            state.id = ''
            state.name = ''
            state.description = ''
            state.url = ''
        }
    }
})

export const {setGalleryInput, setNameGallery, setDescriptionGallery, setUrlGallery, resetGallery} =
    addGallerySlice.actions

export const addGalleryReducer = addGallerySlice.reducer