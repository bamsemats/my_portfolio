import codingWallpaper from "./codingWallpaper.jpg";
import "./App.css";
import { useState, useRef } from "react";
import References from "./components/references/references";
import ScrollIndicatorStaticBars from "./components/scroll-indicator-static-bars/scroll-indicator-static-bars";
import useLocalStorage from "./components/darkmode/useLocalStorage";
import StaticBG from "./StaticBG";
import AppsPage from "./components/pages/apps-page";
import HomePage from "./components/pages/home-page";
import AboutPage from "./components/pages/about-page";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [currentSelected, setCurrentSelected] = useState("home");
  const [menuListOpen, setMenuListOpen] = useState(false);

  const closeTimeout = useRef(null);

  function handleMenuClick() {
    if (menuListOpen) {
      setMenuListOpen((prev) => !prev);
    } else {
      setMenuListOpen(true);
    }

    // Clear any existing timeout
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }

    // Set a new one
    closeTimeout.current = setTimeout(() => {
      setMenuListOpen(false);
      closeTimeout.current = null;
    }, 6000);
  }

  function setPage(page) {
    setCurrentSelected(page);
  }

  function handleToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const pageToLoad = {
    apps: <AppsPage />,
    home: <HomePage />,
    about: <AboutPage />,
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="coding-wallpaper-container">
        <img
          src={codingWallpaper}
          className="coding-wallpaper"
          alt="Wallpaper"
        />
      </div>
      <StaticBG current={currentSelected} />
      <ScrollIndicatorStaticBars
        darkTheme={theme}
        click={handleToggle}
        selectPage={setPage}
        menuToggle={handleMenuClick}
        menuState={menuListOpen}
      />

      {pageToLoad[currentSelected] || <div>Error loading page</div>}

      <References />
    </div>
  );
}

export default App;
