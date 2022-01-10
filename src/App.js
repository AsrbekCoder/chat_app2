import React from "react";
import JoinBlock from "./components/JoinBlock";
import TextMassage from "./components/TextMassage";
import reducer from "./reducer";
import socket from "./socket";
import "@fortawesome/fontawesome-free/css/all.css";
import "./styles/style.scss";
import axios from "axios";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    isJoined: false,
    roomId: null,
    userName: null,
    messagingMy: [],
    users: [],
    messages: [],
  });

  const setUsers = (obj) => {
    dispatch({
      type: "SET_USERS",
      payload: obj,
    });
  };
  const onLogin = async (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM:JOIN", obj);
    const { data } = await axios.get(`/rooms/${obj.roomId}`);
    dispatch({
      type: "SET_DATA",
      payload: data,
    });
  };

  const onMessagingMy = (obj) => {
    dispatch({
      type: "MY_MESSAGES",
      payload: obj,
    });
  };

  React.useEffect(() => {
    socket.on("ROOM:JOINED", setUsers);
    socket.on("ROOM:ADD_MESSAGES", (obj) => {
      dispatch({
        type: "NEW_MESSAGE",
        payload: obj,
      });
    });
  }, []);
  window.socket = socket;
  return (
    <>
      {!state.isJoined ? (
        <JoinBlock onLogin={onLogin} />
      ) : (
        <TextMassage {...state} onMessagingMy={onMessagingMy} />
      )}
    </>
  );
};

export default App;
