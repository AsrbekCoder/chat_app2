import React from "react";
import io from "socket.io-client";
const App = () => {
  const hadleClick = () => {
    io("http://localhost:3000");
  };

  return <button onClick={hadleClick}>Connect</button>;
};

export default App;
