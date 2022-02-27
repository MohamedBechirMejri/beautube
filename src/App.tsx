import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import User from "./Components/User";
import Video from "./Components/Video";
import UserContext from "./Utils/UserContext";

function App(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [user, setUser] = useState({
    name: "",
  });

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={user}
    >
      <div className="bg-white dark:bg-[#1f232c] min-h-screen w-screen dark:text-white flex flex-col items-start justify-start overflow-hidden">
        <Header
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />{" "}
        <div className="flex w-full">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/video/:videoId" element={<Video />} />
            <Route path="/user/:userId" element={<User />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}
export default App;
