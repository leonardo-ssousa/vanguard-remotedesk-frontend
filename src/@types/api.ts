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

//#endregion

//#region REQUESTS
export interface DeviceRenameRequest {
  name: string;
}
//#endregion
