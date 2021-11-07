import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Container, Snackbar } from "@mui/material";
import SendTweet from "./components/SendTweet";
import { TWEETS_STORAGE } from "./utils/constants";
import ListTweets from "./components/ListTweets";
function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });

  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweets, setRealoadTweets] = useState(false);

  useEffect(() => {
    const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(allTweetsStorage);
    setAllTweets(allTweetsArray);
    setRealoadTweets(false);
  }, [reloadTweets]);

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setRealoadTweets(true);
  };

  console.log(allTweets);
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
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
