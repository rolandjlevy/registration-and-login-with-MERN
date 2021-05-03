import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import LoginForm from './LoginForm';

const ModalForm = (props) => {
  const {
    className,
    modalTitle,
    onToggleLogin,
    toggleState
  } = props;

  return (
    <div>
      <Modal 
        isOpen={toggleState} 
        toggle={onToggleLogin} 
        className={className}
        centered={true}
      >
        <ModalHeader toggle={onToggleLogin}>
          {modalTitle}{" "}{<FontAwesomeIcon icon={faSignInAlt} />}
        </ModalHeader>
        <ModalBody className="p-0">
          <LoginForm />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalForm;