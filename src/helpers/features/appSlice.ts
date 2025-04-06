import { createSlice } from "@reduxjs/toolkit";
import { IAppSlice } from "./types";

const initialState: IAppSlice = {
  userPermissions: [1],
};

export const appSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setUserPermissions: () => {},
  },
});

export default appSlice.reducer;
