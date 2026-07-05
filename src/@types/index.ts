export interface Devices {
  id: string;
  name: string | undefined;
  os: string | null;
  userId: string | null;
  createdAt: string;
  cpu: string;
  accessId: string;
  accessPassword: string | null,
  memory: string;
  fullOs: string;
  localUsername: string;
  version: string;
  businessId: string;
  isOnline: boolean;
  lastStatus: number;
}
