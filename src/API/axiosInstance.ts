import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_BUSINESS}/api`,
});

export const setApiToken = (token: string) => {
  AxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearApiToken = () => {
  AxiosInstance.defaults.headers.common.Authorization = ``
}