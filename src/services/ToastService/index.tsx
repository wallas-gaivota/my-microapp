import React, { useState, useEffect } from "react";
import { Toast } from "@gaivota-frontend/gaivota-ui";
import { useAppSelector, useAppDispatch } from "store";
import { toastActions } from "store/toast";
const delay = async time => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, time),
  );
};

export const ToastProvider = () => {
  const [currentToast, setCurrentToast] = useState(null);

  const toastData = useAppSelector(state => state.toastReducer.toastData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!toastData) return;
    executeToast();
    return () => {
      dispatch(toastActions.removeMessage());
    };
  }, [toastData]);

  const executeToast = async () => {
    setCurrentToast({
      type: toastData.type,
      mainText: toastData.mainText,
      duration: toastData.duration,
      secondaryText: toastData.secondaryText,
      open: true,
    });
    await delay(toastData.duration + 200);
    setCurrentToast(null);
  };

  return (
    <Toast
      variant={currentToast?.type}
      mainText={currentToast?.mainText}
      autoHideDuration={currentToast?.duration}
      secondaryText={currentToast?.secondaryText}
      open={currentToast?.open}
    />
  );
};
