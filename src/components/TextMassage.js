import React from "react";
import UsersPage from "./UsersPage";
const TextMassage = (props) => {
  return (
    <div className="container">
      <div className="row no-gutters">
        <UsersPage usersAll={props} />
        <div className="col-md-8">
          <div className="settings-tray">
            <div className="friend-drawer no-gutters friend-drawer--grey">
              <img
                className="profile-image"
                src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg"
                alt=""
              />
              <div className="text">
                <h6>Robo Cop</h6>
                <p className="text-muted">
                  Layin' down the law since like before Chr/ist...
                </p>
              </div>
            </div>
          </div>
          <div className="chat-panel">
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
            <div className="row no-gutters">
              <div className="col-md-3">
                <div className="chat-bubble chat-bubble--left">Hello dude!</div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-md-3">
                <div className="chat-bubble chat-bubble--left">Hello dude!</div>
              </div>
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
            <div className="row">
              <div className="col-12">
                <div className="chat-box-tray">
                  <i className="far fa-grin-alt"></i>
                  <input
                    className="input"
                    type="text"
                    placeholder="Type your message here..."
                  />
                  <i className="fas fa-microphone"></i>
                  <i className="far fa-paper-plane"></i>
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
