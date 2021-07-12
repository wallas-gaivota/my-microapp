import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ToastData = {
  mainText?: React.ReactNode;
  secondaryText?: React.ReactNode;
  duration?: number;
  type: "error" | "warning" | "success";
};
type State = {
  toastData: ToastData;
};
const initialState: State = {
  toastData: null,
};

const TOAST_NAME = "@TOAST";
const toastSlice = createSlice({
  name: TOAST_NAME,
  initialState,
  reducers: {
    showMessage(state, action: PayloadAction<ToastData>) {
      return {
        ...state,
        toastData: action.payload,
      };
    },
    removeMessage() {
      return initialState;
    },
  },
});

export const { actions: toastActions, reducer: toastReducer } = toastSlice;
