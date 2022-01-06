import React from "react";
import JoinBlock from "./components/JoinBlock";
import reducer from "./reducer";
// import socket from "./socket";
import "./style.css";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    isJoined: false,
  });

  const onLogin = () => {
    dispatch({
      type: "JOINED",
      payload: true,
    });
  };
  return (
    <div className="container">
      {!state.isJoined && <JoinBlock onLogin={onLogin} />}
    </div>
  );
};

export default App;
