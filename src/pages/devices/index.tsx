import { useEffect } from "react";
import { DeviceCard } from "../../components/DeviceCard"
import { DevicesPageWrapper } from "./styles"
import { useDevices } from "../../contexts/DevicesContext";
import { useAuth } from "../../contexts/AuthContext";


export const DevicesPage = () => {
  const {fetchDevices, devices} = useDevices()

  useEffect(() => {
    fetchDevices()
  }, []);


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