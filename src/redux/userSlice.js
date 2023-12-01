import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    // loginWithGoogle: (state, action) => {
    //   signInWithPopup(auth, provider)
    //     .then((result) => {
    //       // const credential = GoogleAuthProvider.credentialFromResult(result);
    //       // const token = credential.accessToken;
    //       // const user = result.user;
    //       // state.user =
    //       console.log(result);
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       const email = error.customData.email;
    //       // const credential = GoogleAuthProvider.credentialFromError(error);
    //       console.log(errorMessage);
    //     });
    // },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, loginWithGoogle, logout } = userSlice.actions;

export default userSlice.reducer;
