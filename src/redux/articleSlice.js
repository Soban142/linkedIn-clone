import { createSlice } from "@reduxjs/toolkit";
import { signOut, auth } from "../firebase";

const initialState = {
  articles: null,
  isFetching: false,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    fetchArticles: (state, action) => {
      state.articles = action.payload;
    },
    loader: (state, action) => {
      state.isFetching = action.payload === "true" ? true : false;
    },
  },
});

export const { fetchArticles, loader } = articleSlice.actions;

export default articleSlice.reducer;
