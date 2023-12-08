import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user:{}
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      console.log(action.payload.user);
      state.isAuthenticated = action.payload?.state;
      state.user = action?.payload?.user;
    }
  }
})


export const { setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
