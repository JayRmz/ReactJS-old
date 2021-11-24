import React, { useState } from "react";

// bootstrap
import { Form, Button, Alert } from "react-bootstrap";

// redux
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../actions/validationsAction";
import { addTweetAction } from "../actions/tweetsAction";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";

// Extra frameworks
import moment from "moment";
import { v4 as uuidV4 } from "uuid";

export default function FormAddTweet() {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });

  //   dispatch init
  const dispatch = useDispatch();
  const errorForm = (state) => dispatch(validationFormAddTweetAction(state));
  const addTweet = (state) => dispatch(addTweetAction(state));
  const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));

  //   Get state
  const errorFromValue = useSelector(
    (state) => state.validations.errorFormAddTweet
  );

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, tweet } = formValue;

    if (!name || !tweet) {
      errorForm(true);
      console.error("All fields are required");
    } else {
      errorForm(false);
      console.log(formValue);
      addTweet({
        id: uuidV4(),
        name,
        tweet,
        date: moment(),
      });
      closeModal(false);
    }

    console.log(`errorFromValue: ${errorFromValue}`);
  };

  return (
    <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
      <Form.Group className="text-center">
        <h1>New Tweet</h1>
      </Form.Group>

      <Form.Group>
        <Form.Control type="text" name="name" placeholder="John Doe" />
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="textarea"
          name="tweet"
          rows="3"
          placeholder="Your tweet... "
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send Tweet
      </Button>

      {errorFromValue && (
        <Alert variant="danger" className="mt-4">
          All fields are required
        </Alert>
      )}
    </Form>
  );
}
