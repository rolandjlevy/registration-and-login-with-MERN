import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import RegistrationForm from './RegistrationForm';

const ModalForm = (props) => {
  const {
    className,
    modalTitle,
    modalType,
    onToggle,
    toggleState
  } = props;

  return (
    <div>
      <Modal isOpen={toggleState} toggle={onToggle} className={className}>
        <ModalHeader toggle={onToggle}>
          {modalTitle}{" "}{modalType === 'registration' ? <FontAwesomeIcon icon={faUser} /> : <FontAwesomeIcon icon={faSignInAlt} />}
        </ModalHeader>
        <ModalBody className="p-0">
          <RegistrationForm />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalForm;