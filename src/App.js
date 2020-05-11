import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = ({ store }) => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <Header />
      </header>

      <aside className="navbar">
        <Navbar />
      </aside>

      <main className="main">
        <Route render={() => <ProfileContainer />} path="/profile" />
        <Route render={() => <DialogsContainer />} path="/dialogs" />

        <Route render={() => <UsersContainer />} path="/users" />
        <Route render={() => <Settings />} path="/settings" />
        <Route render={() => <Music />} path="/music" />
        <Route render={() => <News />} path="/news" />
      </main>
    </div>
  );
};

export default App;
