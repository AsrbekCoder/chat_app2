import React from "react";
import socket from "../socket";
import UsersPage from "./UsersPage";
const TextMassage = (props) => {
  const [messageText, setMessageText] = React.useState("");
  const { users, userName, roomId, messages, onMessagingMy, messagingMy } =
    props;

  const ref = React.useRef(null);

  const onSendMessages = () => {
    socket.emit("ROOM:NEW_MESSAGES", {
      userName,
      roomId,
      text: messageText,
    });
    onMessagingMy(messageText);
    setMessageText("");
  };
  React.useEffect(() => {
    ref.current.scrollTo(0, 9999);
  }, [messagingMy]);
  return (
    <div className="container">
      <div className="row no-gutters text_massage">
        <UsersPage usersAll={props} />
        <div className="col-md-8">
          <div className="chat-panel" ref={ref}>
            <div className="chat_panel_user">
              <span>Live: {users.length}</span>
              <p> Room Opened by ___ {users[0]}</p>
            </div>
            {messages.map((message, idx) => (
              <div className="row no-gutters" key={(messages, idx)}>
                <div className="col-md-3">
                  <div className="chat-bubble chat-bubble--left">
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            {messagingMy.map((e, idx) => (
              <div className="row no-gutters" key={e + "_" + idx}>
                <div className="col-md-3 offset-md-9">
                  <div className="chat-bubble chat-bubble--right">{e}</div>
                </div>
              </div>
            ))}
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
                    onClick={onSendMessages}
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
