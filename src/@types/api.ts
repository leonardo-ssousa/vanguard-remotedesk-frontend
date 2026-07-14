import type { ConectionsHistory, Device, User } from ".";

//#region RESPONSES
export interface DevicesResponse {
  data: Device[];
}

export interface DeviceResponse {
  data: Device;
}

export interface ConectionHistoryResponse {
  error: boolean;
  data: ConectionsHistory[];
}

export interface DeviceRenameResponse {
  error: boolean;
  updatedDevice: Device;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}

//#endregion

//#region REQUESTS
export interface DeviceRenameRequest {
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
//#endregion


export interface BackendError {
  message: string
}

export interface ApiErrorResponse {
  status: number | undefined;
  message: string | undefined;
}