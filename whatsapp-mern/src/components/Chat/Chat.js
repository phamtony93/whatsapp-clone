import React from "react";
import "./Chat.css";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

const Chat = () => {
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
        <p className="chat__bodyMessage">
          <span className="chat__bodySender">Tony</span>
          Hello world
          <span className="chat__bodyTimestamp">
            {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat__bodyMessage chat__receiver">
          <span className="chat__bodySender">Tony</span>
          Hello world
          <span className="chat__bodyTimestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Type a message"></input>
          <button>Send</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
