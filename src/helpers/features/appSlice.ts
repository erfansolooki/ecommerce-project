import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAppSlice,
  IReceiverInfo,
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
  },
});

export default appSlice.reducer;
