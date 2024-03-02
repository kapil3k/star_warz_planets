import { Modal } from "antd";

const InfoModal = ({
  handleCancel,
  visible,
  residentData,
  children,
  planetData,
}) => {
  return (
    <>
      <Modal
        title={residentData?.name ?? planetData?.name}
        open={visible}
        onCancel={handleCancel}
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};

export default InfoModal;
