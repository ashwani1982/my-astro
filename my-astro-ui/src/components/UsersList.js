import React, { useState, useEffect } from "react";
import UserListDropDown from "./UserListDropDown";
function UsersList() {
  const [userList, setUserList] = useState();

  var path = "";

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/users/`);
      const body = await result.json();
      setUserList(body);
    };
    fetchData();
  }, [path]);

  /*  useEffect(() => {

    
    console.log(`Entry getUsersList useEffect block`);
    const fetchData = async () => {
      try {
        const result = await fetch(`/api/users`);
        console.log(`getUsersList result=${JSON.stringify(result)}`);
        //const body = await JSON.parse(result);

        //console.log(`getUsersList body=${body}`);
        setUserList(result);
      } catch (error) {
        console.error(`Error  ${error}`);
      }
    };
    fetchData();
  }); */

  return <UserListDropDown users={userList} />;
}

export default UsersList;
