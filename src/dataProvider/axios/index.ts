import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const userInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

userInstance.interceptors.request.use(handleUserRequest);
userInstance.interceptors.response.use(handleUserResponse);

function handleUserRequest(req: InternalAxiosRequestConfig) {
  return req;
}

function handleUserResponse(res: AxiosResponse<any>) {
  return res;
}

export { userInstance };
