import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IListPersonState {
  payload: any[];
  error: boolean;
  loading: boolean;
  meta: { offset?: number; perPage?: number };
}

const initialState: IListPersonState = {
  payload: [],
  error: false,
  loading: false,
  meta: { offset: 0, perPage: 10 },
};
const SLICE_NAME = "@REGISTER/LIST_PERSON";
const listPersonSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    request(state, action: PayloadAction<IListPersonState["meta"]>) {
      return {
        ...state,
        error: false,
        loading: true,
        meta: action.payload || state.meta,
      };
    },
    success(state, action) {
      return { ...state, payload: action.payload };
    },
    failure(state) {
      return state;
    },
  },
});

export const { actions: listPersonActions, reducer: listPersonReducer } = listPersonSlice;
