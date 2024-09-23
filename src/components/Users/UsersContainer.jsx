import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC } from "../../store/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.users.users, 
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (userId) => {
      dispatch(followAC(userId))
    },
    onSetUsers: (userId) => {
      dispatch(setUsersAC(userId))
    },
  }
};


export const UsersContainer =  connect(mapStateToProps, mapDispatchToProps) (Users);