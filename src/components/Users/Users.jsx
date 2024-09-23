import React from "react";
import User from "./User/User";

const  Users = (props) => {

  console.log('users render');
    return ( 
      <React.Fragment>
        {
          props.users.map( u => 
            <User 
              user={u}
              onFollow={props.onFollow} 
              onUnFollow={props.onUnFollow}
              onSetUsers={props.onSetUsers} />)
        }
      </React.Fragment>
      )
    };

export default Users;