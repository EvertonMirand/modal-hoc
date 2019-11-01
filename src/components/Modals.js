import React from 'react';

/* Container */
import ModalHoc from '../hocs/Modal';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal';

const objectOrFunction = (component, props) => {
  if (typeof component === 'function') {
    return component(props);
  }
  return component;
};

export const ModalComponent = ({
  content,
  header,
  modalHocProps: { open, toggleModal },
}) => (
  <Modal onClose={toggleModal} open={open}>
    <Header>{header}</Header>
    <Modal.Content>
      <div>{objectOrFunction(content, { toggleModal })}</div>
    </Modal.Content>
  </Modal>
);

export default function DefaultModal({ viewComponent, ...rest }) {
  return (
    <ModalHoc
      viewComponent={viewComponent}
      modalComponent={modalHocProps => (
        <ModalComponent {...rest} modalHocProps={modalHocProps} />
      )}
    />
  );
}
