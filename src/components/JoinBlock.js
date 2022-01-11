import axios from "axios";
import React from "react";

const JoinBlock = ({ onLogin }) => {
  const [roomId, setRoomId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const obj = {
    roomId,
    userName,
  };
  const hadleClick = async () => {
    if (!roomId || !userName) return alert(" Room Id or User not dound");

    setLoading(true);
    await axios.post("/rooms", {
      obj,
    });
    onLogin(obj);
  };
  return (
    <div className="login_box">
      <div className="form_box">
        <input
          type="text"
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="file"
          placeholder="User Name"
          onChange={(e) => console.log(e)}
        />
        <button disabled={isLoading} onClick={hadleClick}>
          {!isLoading ? "Join" : "Joining..."}
        </button>
      </div>
    </div>
  );
};

export default JoinBlock;
