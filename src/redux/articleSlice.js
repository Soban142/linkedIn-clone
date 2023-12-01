import { createSlice } from "@reduxjs/toolkit";
import { signOut, auth } from "../firebase";

const initialState = {
  article: null,
  isFetching: false,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    article: (state, action) => {
      state.article = action.payload;
    },
    loader: (state, action) => {
      state.isFetching = action.payload === "true" ? true : false;
    },
  },
});

export const { article, loader } = articleSlice.actions;

export default articleSlice.reducer;
