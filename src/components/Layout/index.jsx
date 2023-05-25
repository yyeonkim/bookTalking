import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./style.css";
import Header from "./Header";
import { colorTheme } from "../../theme";
import ChatProvider from "../../context/ChatContext";

export default function Layout() {
  const location = useLocation();
  const [bgColor, setBgColor] = useState(colorTheme.backgroundColor);

  useEffect(() => {
    if (location.pathname === "/chat" || location.pathname === "/drawing") {
      setBgColor("#fff");
    }

    if (location.pathname === "/") {
      setBgColor(colorTheme.backgroundColor);
    }
  }, [location]);

  return (
    <ChatProvider>
      <div id="Layout" style={{ backgroundColor: bgColor }}>
        <Header />
        <Outlet />
      </div>
    </ChatProvider>
  );
}
