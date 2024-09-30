import React from "react";
import axios from "axios";
import User from "./User/User";

const  Users = (props) => {

  console.log('users render');
  if(props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => props.onSetUsers(response.data.items))
  };

    return ( 
      <React.Fragment>
        {
          props.users.map( u => 
            <User 
              user={u}
              onFollow={props.onFollow} />)
        }
      </React.Fragment>
      )
    };

export default Users;