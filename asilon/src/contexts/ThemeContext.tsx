import { createContext, useState, useMemo, useContext, useEffect, type ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface ThemeContextData {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const savedMode = localStorage.getItem('themeMode');
    return (savedMode === 'light' || savedMode === 'dark') ? savedMode : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' 
            ? {
                background: { default: '#f5f5f5', paper: '#ffffff' },
                primary: { main: '#1976d2' },
              }
            : {
                primary: { main: '#90caf9' },
              }),
        },
      }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useAppTheme = () => useContext(ThemeContext);