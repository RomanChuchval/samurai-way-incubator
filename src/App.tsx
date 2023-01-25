import React from 'react';
import './App.css';
import {Profile} from "./Components/Content/Profile";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Footer} from "./Components/Footer/Footer";
import {Dialogs} from "./Components/Content/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {NewsFeed} from "./Components/Content/News/News_feed";
import {Music} from "./Components/Content/Music/Music";
import {Settings} from "./Components/Content/Settings/Settings";
import {StateType} from "./Redux/state";


type AppPropsType = {
    state: StateType
    addPost: (postMessage: string) => void
}

function App(props: AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar navbarState={props.state.navbar}/>
                <div className='content_wrapper'>
                    <Route path={'/dialogs'} render={() =>
                        <Dialogs state={props.state.dialogsPage}

                        />}/>
                    <Route path={'/profile'} render={() =>
                        <Profile state={props.state.profilePage}
                                 addPost={props.addPost}
                        />}/>
                    <Route path={'/news_feed'} component={NewsFeed}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
