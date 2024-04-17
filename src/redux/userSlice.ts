import { createSlice } from "@reduxjs/toolkit";
import { useSelector, shallowEqual } from "react-redux";
import { useActions } from "../hooks/useAction";

export const initialState = {
  user: null,
  business: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
    setUser: (state, action) => (state.user = action.payload),
    setBusiness: (state, action) => {
      state.business = action.payload;
    },
    setToken: (state, action) => (state.token = action.payload),
    setUserData: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.business = action.payload.businesses;
    },
  },
});

export const actions = userSlice.actions;

export const useUserStateActions = () => useActions({ actions });

const userSelector = (state: any) => state.user;
export const useUserState = () => useSelector(userSelector, shallowEqual);

export default userSlice.reducer;
