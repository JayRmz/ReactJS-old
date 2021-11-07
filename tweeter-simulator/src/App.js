import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Container, Snackbar } from "@mui/material";
import SendTweet from "./components/SendTweet/SendTweet";
import { TWEETS_STORAGE } from "./utils/constants";
function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });

  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(allTweetsStorage);
    setAllTweets(allTweetsArray);
  }, []);

  console.log(allTweets);
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={toastProps.open}
        message={<span id="message-id">{toastProps.text}</span>}
        autoHideDuration={6000}
      />
    </Container>
  );
}

export default App;
