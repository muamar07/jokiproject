import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Asset } from 'interfaces/Asset.interfaces'
import { Catalogues } from 'interfaces/Catalogue.interface'
import { Component, SubComponent } from 'interfaces/Component.interface'
import { Drawings } from 'interfaces/Drawings.interface'

export interface AddComponent {
  assets: Asset[]
  account_code: Component
  parent_component: SubComponent
  component_name: string
  component_code: string
  component_code_1: string
  component_code_2: string
  component_code_3: string
  component_code_4: string
  maker: string
  model: string
  component_desc: string
  criticality: string
  class_reference: string
  component_drawing: Drawings[]
  catalogue: Catalogues[]
  sub_component: SubComponent[]
}

const initialState: AddComponent = {
  assets: [],
  account_code: {
    id: '',
    account_code: '',
    name: '',
    components: [],
  },
  parent_component: {
    account_code_id: '',
    subRows: [],
    component_code: '',
    id: '',
    level: 0,
    name: '',
  },
  component_name: '',
  component_code: '',
  component_code_1: '',
  component_code_2: '',
  component_code_3: '',
  component_code_4: '',
  maker: '',
  model: '',
  component_desc: '',
  criticality: '',
  class_reference: '',
  component_drawing: [],
  catalogue: [],
  sub_component: [],
}

export const addComponentSlice = createSlice({
  name: 'addComponentArray',
  initialState,
  reducers: {
    setComponentInput: (state, action: PayloadAction<SubComponent>) => {
      state.assets = action.payload.assets ? action.payload.assets : []
      state.account_code = action.payload.account_code
        ? action.payload.account_code
        : {
            id: '',
            account_code: '',
            name: '',
            components: [],
          }
      state.component_name = action.payload.name
      state.maker = action.payload.maker ? action.payload.maker : ''
      state.model = action.payload.model ? action.payload.model : ''
      state.component_desc = action.payload.description ? action.payload.description : ''
      state.criticality = action.payload.criticality ? action.payload.criticality : ''
      state.class_reference = action.payload.class_reference ? action.payload.class_reference : ''
      state.component_drawing = action.payload.files ? action.payload.files : []
      state.catalogue = action.payload.catalogues ? action.payload.catalogues : []
      state.sub_component = action.payload.subRows
      //for component code
      state.component_code_1 = action.payload.account_code ? action.payload.account_code.account_code : ''
      if(state.parent_component){
        console.log()
      }
      //state.component_code = action.payload.component_code //chheck
      // const [code2, code3, code4] = action.payload.component_code.split('.')
      // state.component_code_2 = code2 ? code2 : ''
      // state.component_code_3 = code3 ? code3 : ''
      // state.component_code_4 = code4 ? code4 : ''
    },
    changeCompVessel: (state, action: PayloadAction<Asset[]>) => {
      state.assets = action.payload
    },
    changeCompAccCode: (state, action: PayloadAction<Component>) => {
      state.account_code = action.payload
      state.component_code_1 = action.payload.account_code ? action.payload.account_code : ''
    },
    changeCompParent_comp: (state, action: PayloadAction<SubComponent>) => {
      state.parent_component = action.payload
    },
    changeCompComp_name: (state, action: PayloadAction<string>) => {
      state.component_name = action.payload
    },
    changeCompComp_code_1: (state, action: PayloadAction<string>) => {
      state.component_code_1 = action.payload
    },
    changeCompComp_code_2: (state, action: PayloadAction<string>) => {
      state.component_code_2 = action.payload
    },
    changeCompComp_code_3: (state, action: PayloadAction<string>) => {
      state.component_code_3 = action.payload
    },
    changeCompComp_code_4: (state, action: PayloadAction<string>) => {
      state.component_code_4 = action.payload
    },
    changeCompComp_code: (state, action: PayloadAction<string>) => {
      state.component_code = action.payload
      const [code2, code3, code4] = action.payload.split('.')
      state.component_code_2 = code2 ? code2 : ''
      state.component_code_3 = code3 ? code3 : ''
      state.component_code_4 = code4 ? code4 : ''
    },
    changeCompMaker: (state, action: PayloadAction<string>) => {
      state.maker = action.payload
    },
    changeCompModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload
    },
    changeCompComp_desc: (state, action: PayloadAction<string>) => {
      state.component_desc = action.payload
    },
    changeCompCriticality: (state, action: PayloadAction<string>) => {
      state.criticality = action.payload
    },
    changeCompClass_ref: (state, action: PayloadAction<string>) => {
      state.class_reference = action.payload
    },
    changeCompComp_drawings: (state, action: PayloadAction<Drawings[]>) => {
      state.component_drawing = action.payload
    },
    changeCompCatalogue: (state, action: PayloadAction<Catalogues[]>) => {
      state.catalogue = action.payload
    },
    changeCompSub_comp: (state, action: PayloadAction<SubComponent[]>) => {
      state.sub_component = action.payload
    },
    resetCompData: (state) => {
      state.assets = []
      state.account_code = {
        id: '',
        account_code: '',
        name: '',
        components: [],
      }
      state.parent_component = {
        account_code_id: '',
        subRows: [],
        component_code: '',
        id: '',
        level: 0,
        name: '',
      }
      state.component_name = ''
      state.component_code = ''
      state.component_code_1 = ''
      state.component_code_2 = ''
      state.component_code_3 = ''
      state.component_code_4 = ''
      state.maker = ''
      state.model = ''
      state.component_desc = ''
      state.criticality = ''
      state.class_reference = ''
      state.component_drawing = []
      state.catalogue = []
      state.sub_component = []
    },
    resetComAccCode: (state) => {
      state.account_code = {
        id: '',
        account_code: '',
        name: '',
        components: [],
      }
    },
    resetCompParent_comp: (state) => {
      state.parent_component = {
        account_code_id: '',
        subRows: [],
        component_code: '',
        id: '',
        level: 0,
        name: '',
      }
    },
  },
})

export const {
  setComponentInput,
  changeCompVessel,
  changeCompAccCode,
  changeCompParent_comp,
  changeCompComp_name,
  changeCompComp_code,
  changeCompComp_code_1,
  changeCompComp_code_2,
  changeCompComp_code_3,
  changeCompComp_code_4,
  changeCompMaker,
  changeCompModel,
  changeCompComp_desc,
  changeCompCriticality,
  changeCompClass_ref,
  changeCompComp_drawings,
  changeCompCatalogue,
  changeCompSub_comp,
  resetCompData,
  resetComAccCode,
  resetCompParent_comp,
} = addComponentSlice.actions
export const addComponentReducer = addComponentSlice.reducer
