import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  // query data from mongo db once per full render (should realistically use persisted storage?)
  useEffect(() => {
    axios.get("/messages/sync").then((response) => setMessages(response.data));
  }, []);

  // useEffect hook to only subscribe listener once on render
  useEffect(() => {
    const pusher = new Pusher("e2e5439c805a1f0641d7", {
      cluster: "us3",
    });
    // subscribe to messages channel as defined on node
    // bind to inserted event
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      // append new data to messages
      // set message using ES6 spread operator + new message
      setMessages([...messages, newMessage]);
    });

    // return arrow function to define useEffect clean up process
    // unsubscribe and unbind listener to prevent multiple active listeners
    return () => {
      pusher.unbind_all();
      pusher.unsubscribe();
    };
    // hook needs to be dependent on 'messages' otherwise it won't rebuild/refresh
  }, [messages]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
