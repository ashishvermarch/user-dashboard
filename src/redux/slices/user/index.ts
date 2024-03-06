import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { TokenType, UserDetailsType } from "./types";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken: (state, action: PayloadAction<TokenType>) => {
      state.user.token = action.payload;
    },

    setUserDetails: (state, action: PayloadAction<UserDetailsType>) => {
      state.user.userDetails = action.payload;
    },
  },
});

export const { setUserToken, setUserDetails } = userSlice.actions;

export default userSlice.reducer;
