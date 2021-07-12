import axios from "axios";
import { GetAuthToken, InterceptorResponse } from "utils/AuthUtils";

const windowType: any = window;

const axiosConfig = {
  baseURL: windowType.apiUrl,
  headers: { Authorization: `Bearer ${GetAuthToken()}` },
};

const api = axios.create(axiosConfig);

api.interceptors.response.use(InterceptorResponse.onFulfilled, InterceptorResponse.onRejected);

export default api;
