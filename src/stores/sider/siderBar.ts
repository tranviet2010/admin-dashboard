import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const initialState = {
  collapsed: false
};

const SiderBar = createSlice({
  name: "siderBar",
  initialState,
  reducers: {
    toggleSiderBar: (state) => {
      state.collapsed = !state.collapsed;
    },
    closeSiderBar: (state) => {
      state.collapsed = true;
    },
    openSiderBar: (state) => {
      state.collapsed = false;
    }
  }
});

export const SiderBarStore = (state: RootState) => state.siderBar;
export const { toggleSiderBar, closeSiderBar, openSiderBar } = SiderBar.actions;
export default SiderBar.reducer;