import { Button } from "@/components/atoms/button";
import ReactModal from "react-modal";

interface Props {
  opened: boolean;
  onRequestClose: () => void;
}

export function Modal({ opened, onRequestClose }: Props) {
  const title = "リマインダーを作成";
  ReactModal.setAppElement("main");
  return (
    <ReactModal isOpen={opened} onRequestClose={onRequestClose}>
      <div>
        {title}
        <Button label="閉じる" onClick={onRequestClose} />
      </div>
    </ReactModal>
  );
}
