import React from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (
  { postData, 
    newPostText,
    onAddPosts,
    onChangeText }) => {
    
  console.log('render myPosts');
  
      //КОМПОНЕНТА
  return (
    <div className = {styles.my_posts}>
      <h3>Мои публикации</h3>
        <Box sx={{ paddingLeft: '1%', width: '98%', maxWidth: '100%'}}>
          <TextField 
            onChange={onChangeText} 
            value={newPostText}  
            fullWidth 
            label="Новый пост..." 
            id="fullWidth" />
        </Box>
    
      <div className={styles.btn}>
        <Button 
          onClick={onAddPosts} 
          size="small" 
          variant="contained" 
          endIcon={<SendIcon />}>
            add post
        </Button>
      </div>
      <div className={styles.posts}>
        {postData.map((p, i) =>  
          <Post 
            key={i} 
            message = {p.post} like = {p.likes} />)}
      </div>
    </div>
  );
};

export default MyPosts;