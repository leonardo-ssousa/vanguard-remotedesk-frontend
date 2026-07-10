export interface Device {
  id: string;
  name: string | undefined;
  os: string | null;
  userId: string | null;
  createdAt: string;
  cpu: string;
  accessId: string;
  accessPassword: string | null;
  memory: string;
  fullOs: string;
  localUsername: string;
  version: string;
  businessId: string;
  isOnline: boolean;
  lastStatus: number;
}

export interface User {
  createAt: string;
  email: string;
  friendlyName: string;
  id: string;
  isActive: boolean;
  isAdmin: false;
  password: string;
}

export interface ConectionsHistory {
  destination: string;
  endAt: string;
  id: number;
  origin: string;
  startAt: string;
  type: string;
  user: User;
  userId: string;
}
