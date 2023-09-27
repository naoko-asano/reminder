import { Button } from "@/components/atoms/button";
import { Modal } from "@/components/molecules/modal";
import { useModalStatus } from "@/context/modalStatus";

export default function Contents() {
  const { opened, handleOpenModal, handleCloseModal } = useModalStatus();
  return (
    <>
      <h2>登録されたメッセージ</h2>
      <Button label="リマインダーを作成" onClick={handleOpenModal} />
      <Modal opened={opened} onRequestClose={handleCloseModal} />
    </>
  );
}
