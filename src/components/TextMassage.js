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
    <div className="chat_center">
      <div className="chat">
        <div className="chat-users">
          <h4>{userName}</h4>

          <hr />
          <ul>
            {users.map((name, index) => (
              <li key={name + index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="chat-messages">
          <div ref={ref} className="messages">
            <div className="chat_description">
              <h2>
                Комната создал: <b>{users[0]}</b>
              </h2>
              <b>Онлайн ({users.length}):</b>
            </div>
            {messages.map((message, idx) => (
              <div className="message" key={(message, idx)}>
                <div>
                  <p>{message.text}</p>
                  <br />
                  <span>{message.userName}</span>.
                </div>
              </div>
            ))}
            {messagingMy.map((message, idx) => (
              <div
                className="message meta"
                key={(message, idx)}
                style={{ justifyContent: "end" }}
              >
                <div>
                  <p>{message}</p>
                  <br />
                  <span>
                    {new Date().getHours() + ":" + new Date().getMinutes()}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <form>
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="form-control"
              rows="3"
            ></textarea>
            <button
              onClick={onSendMessages}
              type="button"
              className="btn btn-success"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TextMassage;
