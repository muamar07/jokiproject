// rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from './slice/login.slice';
import { loginCmsReducer } from './slice/loginCMS.slice';
import { requisitionReducer } from './slice/requisition.slice';
import { addRequisitionReducer } from './slice/addRequisition.slice';
import { loaderReducer } from './slice/loader.slice';
import { addComponentReducer } from './slice/addComponent.slice';
import { assetsReducer } from './slice/assetsList.slice';
import { accountCodeReducer } from './slice/accountCode.slice';
import { addCatalogueReducer } from './slice/addCatalogue.slice';
import { componentListReducer } from './slice/componentList.slice';
import { addMenuReducer } from './slice/addMenu.slice';
import { addLocationReducer } from './slice/addLocation.slice';
import { addGalleryReducer } from './slice/addGallery.slice';
import { expandableTableSliceReducer } from './slice/expandableTable.slice';

const rootReducer = combineReducers({
  addGallery: addGalleryReducer,
  location: addLocationReducer,
  login: loginReducer,
  loginCms : loginCmsReducer ,
  requisitionArray: requisitionReducer,
  addCatalogue: addCatalogueReducer,
  addMenu : addMenuReducer,
  addRequisition: addRequisitionReducer,
  loader: loaderReducer,
  addComponent: addComponentReducer,
  assetsArray: assetsReducer,
  accountCodeArray: accountCodeReducer,
  componentListData: componentListReducer,
  expandableTableData: expandableTableSliceReducer,
});

export default rootReducer;
