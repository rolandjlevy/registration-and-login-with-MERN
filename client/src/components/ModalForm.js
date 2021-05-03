import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalForm = (props) => {
  const {
    className,
    modalTitle,
    onToggle,
    toggleState
  } = props;

  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={toggleState}  toggle={onToggle} className={className}>
        <ModalHeader toggle={onToggle}>{modalTitle}</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalForm;