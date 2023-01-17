import React from "react";
import StreamingPage from "./pages/Streaming";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const SpotifyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<StreamingPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default SpotifyRoutes;