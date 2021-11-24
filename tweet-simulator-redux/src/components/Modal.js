import React from "react";

// react bootstrapComponents
import { Modal as ModalBoot } from "react-bootstrap";

// redux
import { useDispatch, useSelector } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";

export default function Modal(props) {
  const { children } = props;

  //   dispatch to acces actions
  const dispatch = useDispatch();
  const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));

  //   useSelector to access a storage value
  const isOpenModal = useSelector((state) => state.modals.stateModalAddTweet);

  console.log(`is Open Modal ${isOpenModal}`);

  return (
    <ModalBoot
      show={isOpenModal}
      onHide={() => closeModal(false)}
      size="lg"
      centered
    >
      {children}
    </ModalBoot>
  );
}
