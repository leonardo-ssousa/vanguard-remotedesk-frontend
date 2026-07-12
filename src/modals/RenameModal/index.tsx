import { useState } from "react";
import type { Device } from "../../@types";
import { ModalPortal } from "../../components/Portal";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { RenameModalWrapper } from "./styles";
import { renameDevice } from "../../API";

interface RenameModalProps {
  onClose: (updatedDevice?: Device) => void;
  isOpen: boolean;
  device: Device;
}

export const RenameModal = ({ device, isOpen, onClose }: RenameModalProps) => {
  if (!isOpen) return null;
  const [newName, setNewName] = useState<string>(device.name || "");

  const handleRename = async () => {
    const updatedDevice = await renameDevice(device.id, newName)
    return onClose(updatedDevice.updatedDevice)
  }

  return (
    <ModalPortal>
      <RenameModalWrapper>
        <header>
          <h4>Renomear dispositivo</h4>
          <p>Este nome aparece em listagens e logs.</p>
        </header>
        <main>
          <Input title="Novo nome:" defaultValue={device.name} onChange={e => setNewName(e.target.value)}/>
        </main>
        <footer>
          <Button buttonType="tertiary" onClick={() => onClose()}>Cancelar</Button>
          <Button buttonType="primary" onClick={handleRename} disabled={newName == device.name}>Salvar</Button>
        </footer>
      </RenameModalWrapper>
    </ModalPortal>
  );
};
