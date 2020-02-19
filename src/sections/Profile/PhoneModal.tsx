import React from 'react';

import Modal from 'react-bootstrap/Modal';

interface PhoneModalProps {
  phone: boolean;
  hidePhone: () => void;
  phone_number: string;
}

const PhoneModal = ({ phone, hidePhone, phone_number }: PhoneModalProps) => {
  return (
    <Modal
      size="sm"
      show={phone}
      onHide={hidePhone}
      animation
      centered
    >
      <Modal.Header closeButton>
        {'Call ' + phone_number + '?'}
        <button type="button" className="close">
          ✓
        </button>
      </Modal.Header>
    </Modal>
  );
}

export default PhoneModal;
