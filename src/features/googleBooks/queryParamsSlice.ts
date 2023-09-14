import { createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "../../constants/constants";

export interface QueryParams {
  searchedValue: string;
  subject: string;
  orderBy: string;
  startIndex: number;
  maxResults: number;
  key: string;
}

const initialState: QueryParams = {
  searchedValue: "",
  subject: "",
  orderBy: "",
  startIndex: 0,
  maxResults: 30,
  key: API_KEY,
};

export const queryParamsSlice = createSlice({
  name: "queryParams",
  initialState,
  reducers: {
    selectSortOption: (state, action) => {
      state.orderBy = action.payload;
    },
    selectCategory: (state, action) => {
      action.payload === "all"
        ? (state.subject = "")
        : (state.subject = action.payload);
    },
    loadMoreBooks: (state) => {
      state.startIndex = state.startIndex + 30;
    },
    searchForNewValue: (state, action) => {
      state.searchedValue = action.payload;
    },
  },
});

export const {
  selectSortOption,
  loadMoreBooks,
  selectCategory,
  searchForNewValue,
} = queryParamsSlice.actions;
export default queryParamsSlice.reducer;
