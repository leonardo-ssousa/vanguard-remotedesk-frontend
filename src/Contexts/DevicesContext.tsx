import { createContext, useContext, useMemo, useState } from "react";
import type { Device } from "../@types";
import { getBashTerminalUri, getConectionUri, getDevices } from "../API";


interface DevicesContextData {
  devices: Device[];
  loading: boolean;
  fetchDevices: () => Promise<void>;
  handleShareScreen: (id: string) => Promise<void>;
  handleBashTerminal: (id: string) => Promise<void>;
}

interface DevicesProviderProps {
  children: React.ReactNode;
}

const DeviceContext = createContext<DevicesContextData>({} as DevicesContextData)
export const DevicesProvider = ({children}: DevicesProviderProps) => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDevices = async () => {
    const devices = await getDevices()
    setDevices(devices.data)
  }

  const handleShareScreen = async (id: string) => {
    window.location.href = await getConectionUri(id)
  }

  const handleBashTerminal = async (id: string) => {
    window.location.href = await getBashTerminalUri(id)
  }


  const contextValue = useMemo(() => {
    return {
      handleBashTerminal,
      handleShareScreen,
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