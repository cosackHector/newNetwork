import React from "react";
import styles from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (
    { postData, 
      dispatch,
      newPostText }) => {

  console.log('render profile');
  
  return (
    <div className={styles.wrapper}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;