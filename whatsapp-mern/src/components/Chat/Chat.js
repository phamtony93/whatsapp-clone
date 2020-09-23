import React, { useState } from "react";
import "./Chat.css";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../../axios";

const Chat = ({ messages }) => {
  // console.log("messages are >>>>>>", messages);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // need to await axios response
  const sendMessage = async (e) => {
    e.preventDefault();
    //axios query here
    await axios.post("/messages/new", {
      name: "Tony Pham",
      message: input,
      timestamp: "test",
      received: false,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Dance Room</h3>
          <p>last seen Fri, 04 Sep 2020</p>
        </div>
        <div className="chat__headerRight">
          <SearchIcon />
          <AttachFileIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => {
          return (
            <p
              className={`chat__bodyMessage ${
                !message.received && " chat__receiver"
              }`}
            >
              <span className="chat__bodySender">{message.name}</span>
              {message.message}
              <span className="chat__bodyTimestamp">{message.timestamp}</span>
            </p>
          );
        })}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            placeholder="Type a message"
            type="text"
            value={input}
            onChange={handleChange}
          ></input>
          <button onClick={sendMessage} type="submit">
            Send
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
