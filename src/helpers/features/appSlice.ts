import { createSlice } from "@reduxjs/toolkit";
import { IAppSlice } from "./types";

const initialState: IAppSlice = {
  userPermissions: [1],
  inShoppingCartCount: 0,
};

export const appSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setUserPermissions: () => {},

    setShoppingCartCount: () => {},
  },
});

export default appSlice.reducer;
