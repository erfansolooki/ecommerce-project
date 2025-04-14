import { createSlice } from "@reduxjs/toolkit";
import { IAppSlice } from "./types";

const initialState: IAppSlice = {
  userPermissions: [1],
  inShoppingCartCount: 0,
  shoppingCart: [],
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
  },
});

export default appSlice.reducer;
