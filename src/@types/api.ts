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

//#endregion

//#region REQUESTS

//#endregion
