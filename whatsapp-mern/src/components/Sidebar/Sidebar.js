import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "../SidebarChat/SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="data:image/jpeg;base64,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" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        {/* added another container to style the search icon and input together */}
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Search or start new chat"></input>
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;