import React from 'react';
import { Modal as ModalB } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openCloseAddTweetModalAction } from '../actions/modalsActions';

export default function Modal(props) {
  const { children } = props;

  // Dispatch ejecutar Actions
  const dispatch = useDispatch();

  const closeModal = state => dispatch(openCloseAddTweetModalAction(state));

  // Selector para acceder a un valor en el store.
  const isOpenModal = useSelector(state => state.modals.stateModalAddTweet);

console.log(isOpenModal);
  return (
    <ModalB
      show={isOpenModal}
      onHide ={() => closeModal(false)}
      size="lg"
      centered
    >
      {children}
    </ModalB>
  );
}
