import React, {createContext, useEffect, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
  // Function to get the initial theme based on user preferences
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return storedTheme || (userPrefersDark ? 'dark' : 'light');
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const themeToggler = () => {
    setTheme((prevState) => prevState === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(theme);
  }, [theme])

  return (
    <ThemeContext.Provider value = {{theme, themeToggler}}>
      {children}
    </ThemeContext.Provider>
      
    
    
  )
}

export default ThemeContextProvider 