import { Axios, AxiosError, isAxiosError } from "axios";
import type {
  DevicesResponse,
  DeviceResponse,
  ConectionHistoryResponse,
  DeviceRenameRequest,
  DeviceRenameResponse,
  LoginResponse,
  LoginRequest,
  BackendError,
  ApiErrorResponse,
} from "../@types/api";
import {AxiosInstance} from "./axiosInstance";

const handleError = (error: AxiosError<BackendError>):ApiErrorResponse => {
  return {
    status: error.response?.status,
    message: error.response?.data.message
  }
}

// #region Account
export const Login = async (email: string, password: string) => {
  try {
    const payload: LoginRequest = { email, password }
    const user = await AxiosInstance.post<LoginResponse>("/login", payload)
    return user.data
  } catch (error) {
    if(isAxiosError(error)){
      console.error("Erro ao fazer Login:", handleError(error))
      throw handleError(error)
    } else {
      console.error("Erro inesperado ao fazer Login:", error)
      throw error
    }
  }
}

// #endregion

// #region Devices
export const getDevices = async () => {
  try {
    const devices = await AxiosInstance.get<DevicesResponse>("/devices");
    return devices.data;
  } catch (error) {
    console.error("Erro ao buscar dispositivos:", error);
    throw error;
  }
};

export const getDevice = async (id: string) => {
  try {
    const devices = await AxiosInstance.get<DeviceResponse>(`/device/${id}`);
    return devices.data;
  } catch (error) {
    console.error("Erro ao buscar dispositivos:", error);
    throw error;
  }
};

export const getConectionUri = async (id: string) => {
  try {
    const uri = await AxiosInstance.get<string>(`/conn-uri/${id}`);
    return uri.data;
  } catch (error) {
    console.error("Erro ao buscar URI de conexão:", error);
    throw error;
  }
};

export const getBashTerminalUri = async (id: string) => {
  try {
    const uri = await AxiosInstance.get<string>(`/bash-uri/${id}`);
    return uri.data;
  } catch (error) {
    console.error("Erro ao buscar URI de conexão ao terminal:", error);
    throw error;
  }
};

export const getDeviceConectionsHistory = async (id: string) => {
  try {
    const uri = await AxiosInstance.get<ConectionHistoryResponse>(
      `/conn-history/${id}`,
    );
    return uri.data;
  } catch (error) {
    console.error("Erro ao buscar historio do dispositivo:", error);
    throw error;
  }
};

export const renameDevice = async (id: string, newName: string) => {
  try {
    const payload: DeviceRenameRequest = { name: newName };
    const newDevice = await AxiosInstance.post<DeviceRenameResponse>(
      `/device/rename/${id}`,
      payload,
    );

    return newDevice.data;
  } catch (error) {
    console.error("Erro ao renomear o dispositivo:", error);
    throw error;
  }
};

// #endregion
