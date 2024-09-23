import React, { useContext } from "react";
import Messages from "./Messages";
import { addMassageAC, updateMassageTextAC } from "../../../store/dialogsReducer";
import { connect } from "react-redux";
import { MyContext } from "../../..";

// const  MessagesContainer = (
//     { messagesData,   
//       newMessageText,
//       dispatch }) => {

//   console.log('render Messages');
    
//     // КОМПОНЕНТ----->
//     return (
//       <MyContext.Consumer>
//         { (store) => {
//               // ФУНКЦИИ ОБРАБОТЧИКИ СОБЫТИЙ
//   const onAddMassage = () => {
//     store.dispatch(addMassageAC())
//   };  
//   const onUpdateMessageText = (e) => {
//     const text = e.target.value
//     store.dispatch(updateMassageTextAC(text))
//   };
  
//           return (
//       <Messages 
//         onAddMassage={onAddMassage}
//         onUpdateMessageText={onUpdateMessageText}
//         messagesData={store.getState().dialogs.message}
//         newMessageText={store.getState().dialogs.newMessageText}/>)
//         }
//         }
//         </MyContext.Consumer>
//     );
//   };

  const mapStateToProps = (state) => {
    return {
      messagesData: state.dialogs.message,
      newMessageText: state.dialogs.newMessageText
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      onAddMassage: ()  => {
        dispatch(addMassageAC())
      },
      onUpdateMessageText: (e) =>  {
        const text = e.target.value
        dispatch(updateMassageTextAC(text))
      },
    }
  };

  const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesContainer;