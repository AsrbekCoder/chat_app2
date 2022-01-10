import React from "react";
import UsersPage from "./UsersPage";
const TextMassage = (props) => {
  const [messageText, setMessageText] = React.useState("");
  const { users, onMassage } = props;
  return (
    <div className="container">
      <div className="row no-gutters text_massage">
        <UsersPage usersAll={props} />
        <div className="col-md-8">
          <div className="chat-panel">
            <div className="chat_panel_user">
              <span>Live: {users.length}</span>
              <p> Room Opened by ___ {users[0]}</p>
            </div>
            <div className="row no-gutters">
              <div className="col-md-3">
                <div className="chat-bubble chat-bubble--left">Hello dude!</div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-3 offset-md-9">
                <div className="chat-bubble chat-bubble--right">
                  Hello dude!
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-3 offset-md-9">
                <div className="chat-bubble chat-bubble--right">
                  Hello dude!
                </div>
              </div>
            </div>
            <div className="row text_input">
              <div className="col-12">
                <div className="chat-box-tray">
                  <i className="far fa-grin-alt"></i>
                  <input
                    className="input"
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type your message here..."
                  />
                  <i className="fas fa-microphone"></i>
                  <i
                    className="far fa-paper-plane"
                    onClick={() => onMassage(messageText)}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextMassage;
