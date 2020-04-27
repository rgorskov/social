import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { BrowserRouter, Route } from "react-router-dom";

function App({state}) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <header className="header">
          <Header />
        </header>

        <aside className="navbar">
          <Navbar />
        </aside>

        <main className="main">
          <Route render={ () => <Profile data={state.profilePage} /> } path='/profile' />
          <Route render={ () => <Dialogs data={state.dialogsPage} /> } path='/dialogs' />
          <Route render={ () => <Settings /> } path='/settings' />
          <Route render={ () => <Music /> } path='/music' />
          <Route render={ () => <News /> } path='/news' />
          
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
