import React from "react";
import { Link } from "react-router-dom";

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return (
      <p className="bg-dark text-light p-3">{username}, make some friends!</p>
    );
  }

  return (
    <div>
      <h5>
        {friends.map((friend) => (
          <button className="btn w-100 display-block mb-2" key={friend._id}>
            <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
          </button>
        ))}
      </h5>
    </div>
  );
};

export default FriendList;
