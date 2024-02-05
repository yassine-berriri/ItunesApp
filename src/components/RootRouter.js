import React from "react";
import {Route, BrowserRouter, Routes } from "react-router-dom";
import App from "../views/App";
import IntroView from "../views/introView/IntroView";
import TrackView from "../views/trackView/TrackView";


function RootRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<IntroView/>} />
                <Route exact path="/itunes" element={<App/>} />
                <Route exact path="/itunes/:name" element={<TrackView/>} />
            </Routes>
        </BrowserRouter>   
         )
}

export default RootRouter;