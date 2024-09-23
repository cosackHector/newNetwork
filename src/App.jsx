import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsPage from "./components/Dialogs/DialogsPage";
import News from "./components/News/News";
import Users from "./components/Users/Users";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import { UsersContainer } from "./components/Users/UsersContainer";

const App = (
    { state,
      dispatch }) => {

  console.log('render App');

  // КОМПОНЕНТ---->
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route path="/profile" element={ 
              <Profile 
                // dispatch={dispatch}
                // postData={state.profile.post} 
                // newPostText={state.profile.newPostText}
                />} />
            <Route path="/dialogs/*" element={  
              <DialogsPage
                // dispatch={dispatch}
                // newMessageText ={state.dialogs.newMessageText}
                // dialogsData={state.dialogs.dialogs} 
                // messagesData={state.dialogs.message}
                />} />
            <Route path="/friends" element={  <UsersContainer />} />
            <Route path="/news" element={  <News />} />
            <Route path="/music" element={  <Music />} />
            <Route path="/settings" element={  <Settings />} />
          </Routes>
        </main>
      </div>
  );
};

export default App;
