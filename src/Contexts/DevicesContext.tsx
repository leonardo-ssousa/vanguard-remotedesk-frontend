import { createContext, useContext, useMemo, useState } from "react";
import type { Devices } from "../@types";
import { getDevices } from "../API";


interface DevicesContextData {
  devices: Devices[];
  loading: boolean;
  fetchDevices: () => Promise<void>;
}

interface DevicesProviderProps {
  children: React.ReactNode;
}

const DeviceContext = createContext<DevicesContextData>({} as DevicesContextData)
export const DevicesProvider = ({children}: DevicesProviderProps) => {
  const [devices, setDevices] = useState<Devices[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDevices = async () => {
    const devices = await getDevices()
    setDevices(devices.data)
  }


  const contextValue = useMemo(() => {
    return {
      fetchDevices,
      devices,
      loading,
    }
  }, [devices, loading])

  return (
    <DeviceContext.Provider value={contextValue}>
      {children}
    </DeviceContext.Provider>
  )

}


export const useDevices = () => {
  const context = useContext(DeviceContext)
  if(!context){
    throw new Error("useDevices deve ser usado dentro de um DeviceProvider")
  }

  return context
}