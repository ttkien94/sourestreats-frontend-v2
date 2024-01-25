import React from "react";
import LPEAvatar from "app/components/avatar";
function ListRankUser(props) {
  const { userList } = props;
  return userList.map((user, index) => {
    return (
      <div
        className="list-rank-user row d-flex justify-content-between align-items-center py-2 px-4"
        key={index}
        style={{ background: index % 2 === 0 ? "#303440" : "transparent" }}
      >
        <div className="d-flex align-items-center ">
          <LPEAvatar name={user?.name} className="avatar" hiddenName />
          <p className="ml-3">{user.name}</p>
        </div>
        <span>{user.complete}</span>
      </div>
    );
  });
}

export default ListRankUser;
