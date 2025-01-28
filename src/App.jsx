import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './Contexts/theme';  // Fix import capitalization
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-xs p-4"> {/* Reduced width to "max-w-xs" */}
          <div className="w-full max-w-xs mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-xs mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
