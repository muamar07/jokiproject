import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
    id: '',
    Location: '',
    Detail: '',
    Map: '',
    Gojek: '',
    Grab: '',
    Shopee: '',
    takeAway: false,
    dineIn: false
}

const addLocationSlice = createSlice({
    name: 'addLocation',
    initialState,
    reducers: {
        setLocationInput : (state, action:PayloadAction<any>) => {
            state.id = action.payload.id
            state.Location = action.payload.Location
            state.Detail = action.payload.Detail
            state.Map = action.payload.Map
            state.Gojek = action.payload.Gojek
            state.Grab = action.payload.Grab
            state.Shopee = action.payload.Shopee
            state.takeAway = action.payload.false
            state.dineIn = action.payload.dineIn
        },
        setLocation : (state, action:PayloadAction<string>) => {
            state.Location = action.payload
        },
        setDetail : (state, action:PayloadAction<string>) => {
            state.Detail = action.payload
        },
        setMap : (state, action:PayloadAction<string>) => {
            state.Map = action.payload
        },
        setGojek : (state, action:PayloadAction<string>) => {
            state.Gojek = action.payload
        },
        setGrab : (state, action:PayloadAction<string>) => {
            state.Grab = action.payload
        },
        setShopee : (state, action:PayloadAction<string>) => {
            state.Shopee = action.payload
        },
        setTakeAway : (state, action:PayloadAction<boolean>) => {
            state.takeAway = action.payload
        },
        settDineIn : (state, action:PayloadAction<boolean>) => {
            state.dineIn = action.payload
        },
        resetLocation : (state) => {
            state.id = ''
            state.Location = ''
            state.Detail = ''
            state.Map = ''
            state.Gojek = ''
            state.Grab = ''
            state.Shopee = ''
            state.takeAway = false
            state.dineIn = false
        }
    }
})

export const {setLocationInput, setLocation, setDetail, setMap, setGojek, setGrab, setShopee, setTakeAway, settDineIn, resetLocation} =
    addLocationSlice.actions

export const addLocationReducer = addLocationSlice.reducer