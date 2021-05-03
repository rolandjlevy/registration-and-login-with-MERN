import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import RegistrationForm from './RegistrationForm';

const ModalForm = (props) => {
  const {
    className,
    modalTitle,
    onToggleRegister,
    toggleState
  } = props;

  return (
    <div>
      <Modal 
        isOpen={toggleState} 
        toggle={onToggleRegister} 
        className={className}
        centered={true}
      >
        <ModalHeader toggle={onToggleRegister}>
          {modalTitle}{" "}{<FontAwesomeIcon icon={faUser} />}
        </ModalHeader>
        <ModalBody className="p-0">
          <RegistrationForm />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalForm;