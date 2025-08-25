"use client";

import Modal from "@/components/ui/modal";
import ClaimAttemptsMonitor from "./ClaimAttemptsMonitor";

interface ClaimAttemptsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClaimAttemptsModal = ({ isOpen, onClose }: ClaimAttemptsModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Claim Attempts Monitor"
      className="max-w-4xl"
    >
      <ClaimAttemptsMonitor isVisible={isOpen} />
    </Modal>
  );
};

export default ClaimAttemptsModal;
