import React from "react";

const UsersPage = ({ usersAll }) => {
  const { users } = usersAll;
  console.log(users);
  return (
    <div className="col-md-4 border-right">
      <div className="settings-tray">
        <img
          className="profile-image"
          src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg"
          alt="Profile img"
        />
        <span className="settings-tray--right">
          <i className="far fa-comment-dots"></i>
          <i className="fas fa-bars"></i>
          <p>{users.length}</p>
        </span>
      </div>
      <div className="search-box">
        <div className="input-wrapper">
          <i className="fas fa-search"></i>
          <input className="input" placeholder="Search here" type="text" />
        </div>
      </div>
      {users.map((name, idx) => {
        return (
          <div
            key={name + "_" + idx}
            className="friend-drawer friend-drawer--onhover"
          >
            <img
              className="profile-image"
              src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg"
              alt=""
            />
            <div className="text">
              <h6>{name}</h6>
              <p className="text-muted">Hey, you're arrested!</p>
            </div>
            <span className="time text-muted small">13:21</span>
          </div>
        );
      })}
    </div>
  );
};

export default UsersPage;
