import { LuApple, LuMonitor, LuScreenShare, LuSquareTerminal, LuTerminal } from "react-icons/lu"
import { DeviceCardWrapper, DeviceBusinessTag, DeviceActionButton, DeviceStatusPulse } from "./styles"
import type { Devices } from "../../@types"
import type { IconType } from "react-icons";
import { AnimatePresence, easeInOut } from "motion/react";
import { useNavigate } from "react-router-dom";

interface DeviceCardProps {
  device: Devices;
}


const osOptions: Record<string, IconType> = {
  "linux": LuTerminal,
  "apple": LuApple,
  "macos": LuApple,
  "windows": LuMonitor
}

export const DeviceCard = ({ device }:DeviceCardProps) => {
  const navigate = useNavigate()
  const accessId = device.accessId;
  const devicePassword = device.accessPassword
  const deviceOs = device.fullOs?.split("/")[0].toLowerCase() || ""
  const DeviceIcon =  osOptions[deviceOs.trim()]
  const lastStatus = new Date(device.lastStatus)
  
  const handleShareScreen = () => {
    window.location.href = `rustdesk://connection/new/${accessId}${devicePassword ? `?password=${devicePassword}` : ""}`
  }

  const handleBashTerminal = () => {
    window.location.href = `rustdesk://terminal/${accessId}${devicePassword ? `?password=${devicePassword}` : ""}`
  }

  const handleOnClick = () => {
    navigate(`/devices/${device.id}`)
  }

  return (
    <DeviceCardWrapper $isOnline={device.isOnline} onClick={handleOnClick}>
      <header>
        <div>
          <h4>{device.name || "Sem nome"}</h4>
          <p>{accessId}</p>
        </div>
        <section className="device-status">
          <div className="device-indicator">
            <AnimatePresence>
              <span className="indicator"></span>
              <DeviceStatusPulse 
                $isOnline={device.isOnline} 
                initial={{ scale: 1 }}
                animate={{ scale: 0.75}}
                transition={{ duration: .8, ease: easeInOut, repeat: Infinity, repeatType: "reverse" }}
              />
            </AnimatePresence>
          </div>
          <p>{device.isOnline ? "Online" : "Offline"}</p>
        </section>
      </header>

      <main>
        <div className="os">
          {
            DeviceIcon ? <DeviceIcon /> : <LuMonitor />
          }
          <p>{deviceOs.slice(0, 1).toUpperCase() + deviceOs.slice(1, deviceOs.length)}</p>
        </div>
        <div className="actions">
          <DeviceActionButton onClick={handleBashTerminal}>
            <LuSquareTerminal />
          </DeviceActionButton>
          <DeviceActionButton onClick={handleShareScreen}>
            <LuScreenShare />
          </DeviceActionButton>
        </div>
      </main>

      <footer>
        <DeviceBusinessTag>{device.businessId}</DeviceBusinessTag>
        <p>{lastStatus.toLocaleDateString()}</p>
      </footer>
    </DeviceCardWrapper>
  )
}