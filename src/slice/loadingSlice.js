// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: false,
// };

// export const setLoading = createAsyncThunk(
//   "loading/setLoading",
//   async (payload) => {
//     try {
//       return payload;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// export const loadingSlice = createSlice({
//   name: "loading",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [setLoading.fulfilled]: (state, action) => {
//       state.isLoading = action.payload;
//     },
//   },
// });

// const { reducer } = loadingSlice;
// export default reducer;
