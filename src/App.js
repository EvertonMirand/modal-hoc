import React, { Fragment } from 'react';
import './App.css';

import Modal from './components/Modals';

function App() {
  return (
    <>
      <Modal
        viewComponent={<Fragment>Click me to trigger the modal</Fragment>}
        header="Congratulations"
        content={<Fragment>You have toggled your first modal</Fragment>}
      />
      <Modal
        viewComponent={({ toggleModal }) => (
          <button onClick={toggleModal}>Show form</button>
        )}
        header="User Form"
        content={({ toggleModal }) => {
          const onSubmit = () => {
            // TODO: submit form
            toggleModal();
          };
          return (
            <form onSubmit={onSubmit}>
              <input name="name" />
            </form>
          );
        }}
      />
    </>
  );
}

export default App;
