import {
  LuApple,
  LuMonitor,
  LuScreenShare,
  LuSquareTerminal,
  LuTerminal,
} from "react-icons/lu";
import {
  DeviceCardWrapper,
  DeviceBusinessTag,
  DeviceActionButton,
  DeviceStatusPulse,
} from "./styles";
import type { Device } from "../../@types";
import type { IconType } from "react-icons";
import { AnimatePresence, easeInOut } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useDevices } from "../../Contexts/DevicesContext";

interface DeviceCardProps {
  device: Device;
}

const osOptions: Record<string, IconType> = {
  linux: LuTerminal,
  apple: LuApple,
  macos: LuApple,
  windows: LuMonitor,
};

export const DeviceCard = ({ device }: DeviceCardProps) => {
  const navigate = useNavigate();
  const { handleBashTerminal, handleShareScreen } = useDevices();
  const accessId = device.accessId;
  const devicePassword = device.accessPassword;
  const deviceOs = device.fullOs?.split("/")[0].toLowerCase() || "";
  const DeviceIcon = osOptions[deviceOs.trim()];
  const lastStatus = new Date(device.lastStatus);

  const handleClickShareScreen = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleShareScreen(device.id)
  };

  const handleClickBashTerminal = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleBashTerminal(device.id)
  };

  const handleOnClick = () => {
    navigate(`/devices/${device.id}`);
  };

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
                animate={{ scale: 0.75 }}
                transition={{
                  duration: 0.8,
                  ease: easeInOut,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </AnimatePresence>
          </div>
          <p>{device.isOnline ? "Online" : "Offline"}</p>
        </section>
      </header>

      <main>
        <div className="os">
          {DeviceIcon ? <DeviceIcon /> : <LuMonitor />}
          <p>
            {deviceOs.slice(0, 1).toUpperCase() +
              deviceOs.slice(1, deviceOs.length)}
          </p>
        </div>
        <div className="actions">
          <DeviceActionButton onClick={e => handleClickBashTerminal(e)}>
            <LuSquareTerminal />
          </DeviceActionButton>
          <DeviceActionButton onClick={e => handleClickShareScreen(e)}>
            <LuScreenShare />
          </DeviceActionButton>
        </div>
      </main>

      <footer>
        <DeviceBusinessTag>{device.businessId}</DeviceBusinessTag>
        <p>{lastStatus.toLocaleDateString()}</p>
      </footer>
    </DeviceCardWrapper>
  );
};
