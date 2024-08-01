import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Catalogues, Product } from 'interfaces/Catalogue.interface'


const initialState: Catalogues = {
    id: '',
    name: '',
    products: []
}

export const addCatalogueSlice = createSlice({
    name: 'addCatalogueArray',
    initialState,
    reducers: {
        setCatalogueInput: (state, action: PayloadAction<Catalogues>) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.products = action.payload.products
        },
        changeCatName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        changeCatProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        },
        resetCatalogue: (state) => {;
            state.id = ''
            state.name = ''
            state.products = []
        }
    }
})

export const { setCatalogueInput, changeCatName, changeCatProducts, resetCatalogue } =
  addCatalogueSlice.actions

export const addCatalogueReducer = addCatalogueSlice.reducer