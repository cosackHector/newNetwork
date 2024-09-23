import React from "react";
import MyPosts from "./MyPosts";
import { addPostAC, updatePostTextAC } from "../../../store/profileReducer";
import { MyContext } from "../../..";
import { connect } from "react-redux";


// const MyPostsContainer = () => {
    
//   console.log('render myPosts');
  
//       //КОМПОНЕНТА
//   return (
//     <MyContext.Consumer>
//       { (store) => {
//       // ФУНКЦИИ ОБРАБОТЧИКИ СОБЫТИЙ
//   const onAddPosts = () => {
//     store.dispatch(addPostAC())
//   };
//   const onChangeText = (e) => {
//     const text = e.target.value
//     store.dispatch(updatePostTextAC(text))
//   };
//         return (
//     <MyPosts 
//       onChangeText={onChangeText}
//       onAddPosts={onAddPosts}
//       postData={store.getState().profile.post}
//       newPostText={store.getState().profile.newPostText}/>
//         )
//       }}
//     </MyContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    postData: state.profile.post,
    newPostText: state.profile.newPostText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPosts: () => {
      dispatch(addPostAC())
    },
    onChangeText: (e) => {
      const text = e.target.value
      dispatch(updatePostTextAC(text))
    },
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;