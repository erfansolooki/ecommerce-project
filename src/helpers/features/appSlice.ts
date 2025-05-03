import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAppSlice,
  ICourierCompany,
  IReceiverInfo,
  ISelectedReceiveDate,
  IShoppingCard,
  IUserInfo,
  OrderSteps_Enum,
} from "./types";

const initialState: IAppSlice = {
  userPermissions: [1],
  shoppingCart: [],
  isUserLoggedIn: false,
  currentStep: OrderSteps_Enum.ShoppingCart,
  userInfo: undefined,
  receiverInfo: undefined,
  courierCompany: undefined,
  receiveDate: undefined,
};

export const appSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setUserPermissions: () => {},

    setShoppingCart: (state, action: PayloadAction<Array<IShoppingCard>>) => {
      state.shoppingCart = action.payload;
    },

    setOrderStep: (state, action: PayloadAction<OrderSteps_Enum>) => {
      state.currentStep = action.payload;
    },

    setUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload;
    },

    setReceiverInfo: (state, action: PayloadAction<IReceiverInfo>) => {
      state.receiverInfo = action.payload;
    },

    setCourierCompany: (state, action: PayloadAction<ICourierCompany>) => {
      state.courierCompany = action.payload;
    },

    setReceiveDate: (state, action: PayloadAction<ISelectedReceiveDate>) => {
      state.receiveDate = action.payload;
    },

    resetStore: (state) => {
      state.shoppingCart = [];
      state.userInfo = undefined;
      state.receiverInfo = undefined;
      state.courierCompany = undefined;
      state.receiveDate = undefined;
    },
  },
});

export default appSlice.reducer;
