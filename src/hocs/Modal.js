import React, { useState, Fragment } from 'react';

export default function ModalHOC({ modalComponent, viewComponent }) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  function renderViewComponent(viewComponent, props) {
    if (typeof viewComponent === 'function') {
      return viewComponent(props);
    }
    return <div onClick={toggle}>{viewComponent}</div>;
  }

  const modalProps = {
    open,
    toggleModal: toggle,
  };

  return (
    <Fragment>
      {renderViewComponent(viewComponent, modalProps)}
      {modalComponent(modalProps)}
    </Fragment>
  );
}
