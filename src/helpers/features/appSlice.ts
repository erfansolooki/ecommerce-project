import { createSlice } from "@reduxjs/toolkit";
import { IAppSlice, OrderSteps_Enum } from "./types";

const initialState: IAppSlice = {
  userPermissions: [1],
  inShoppingCartCount: 0,
  shoppingCart: [],
  isUserLoggedIn: false,
  currentStep: OrderSteps_Enum.ShoppingCart,
};

export const appSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setUserPermissions: () => {},

    setShoppingCartCount: (state, action) => {
      state.inShoppingCartCount = action.payload;
    },

    setShoppingCart: (state, action) => {
      state.shoppingCart = action.payload;
    },

    setOrderStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export default appSlice.reducer;
