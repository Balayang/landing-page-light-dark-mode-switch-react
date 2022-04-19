import React from 'react';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') ?? 'light');

  const setThemeExtended = theme => {
    setTheme(theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  React.useEffect(() => {
    if (theme === 'dark') {
      setThemeExtended('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeExtended }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
};
