import store from "store";
import { toastActions } from "store/toast";
import { t } from "utils/Translation";
export const GetAuthToken = (): string => {
  const token = localStorage.getItem("token");
  if (token) return token;

  Logout();
};

export const Logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/#/user/login";
};

const errorList = [401, 403, 500, 503];
export const InterceptorResponse = {
  onFulfilled(response) {
    if (!errorList.includes(response.status)) return response;

    Logout();
    return response;
  },
  onRejected(error) {
    if (!errorList.includes(error.response.status)) return error;
    const errorCode = error.response.status;
    const errorText = {
      401: { mainText: t("error"), secondaryText: t("not_authorized") },
      403: { mainText: t("error"), secondaryText: t("server_error") },
      500: { mainText: t("error"), secondaryText: t("server_error") },
      503: { mainText: t("error"), secondaryText: t("server_error") },
    };
    store.dispatch(
      toastActions.showMessage({
        duration: 3000,
        type: "error",
        secondaryText: errorText[errorCode].secondaryText,
        mainText: errorText[errorCode].mainText,
      }),
    );
    // Logout();
    return Promise.reject(error);
  },
};

export const GetSelectedOrg = () => {
  const selectedOrg = localStorage.getItem("selected_organization");
  if (!selectedOrg) Logout();
  return selectedOrg;
};
