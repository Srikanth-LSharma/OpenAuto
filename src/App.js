import './App.css';
import LandingPage from './Containers/LandingPage';
import InfoPage from './Containers/InfoPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LandingPage/>
      <InfoPage/>
    </ThemeProvider>
  );
}

export default App;
