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

function App() {
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
          <Route component={Profile} path='/profile' />
          <Route component={Dialogs} path='/dialogs' />
          <Route component={Settings} path='/settings' />
          <Route component={Music} path='/music' />
          <Route component={News} path='/news' />
          
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
