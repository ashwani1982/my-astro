import React from "react";

function UserListDropDown({ users }) {
  console.log(`UserListDropDown-userList=${users}`);
  if (users) {
    let optionItems = users.map((user, key) => (
      <option key={user.name}>
        {user.name}-{user.dob}
      </option>
    ));

    return (
      <div>
        <select>{optionItems}</select>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Error! userList is not defined</h1>
      </div>
    );
  }
}
export default UserListDropDown;
