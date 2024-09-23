import { useState } from "react";
import viteLogo from "/vite.svg";
import logo from "/img/Logo.png";
import bannerBg from "/img/bannerImg.png";
import {
  FaFacebook,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import React, { useEffect } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routesDeveloper } from "./routes/RoutesDeveloper";
import { StoreProvider } from "./components/store/StoreContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              {routesDeveloper.map(({ ...routesProps }, key) => {
                return <Route key={key} {...routesProps} />;
              })}
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
