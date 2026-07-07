git import { useEffect, useState } from "react";
import { DeviceCard } from "../../components/DeviceCard"
import { DevicesPageWrapper } from "./styles"
import type { Devices } from "../../@types";
import { getDevices } from "../../API";


export const DevicesPage = () => {
  const [devices, setDevices] = useState<Devices[]>([]);
  useEffect(() => {
    handleGetDevices()
  }, []);

  const handleGetDevices = async () => {
    try {
      const devices = await getDevices()
      setDevices(devices.data)
    } catch (error) {
      
    }
  }


  return (
    <DevicesPageWrapper>
      <header>
        <h2>Dispositivos</h2>
        <p>{devices.length} máquinas cadastradas · 7 online</p>
      </header>
      <main>
        {
          devices.map( (device, i) => {
            return <DeviceCard key={i} device={device} />
          })
        }
      </main>
    </DevicesPageWrapper>
  )
}