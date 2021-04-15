import { CssBaseline } from '@material-ui/core';
import './App.css';
import Navbar from './Compounts/Navbar';
import Heading from './Compounts/Heading';
import Subsections from './Compounts/SubSections';
import Syallbus from './Compounts/Syallbus';

function App() {
  return (
    <>
    <CssBaseline />
    <Navbar />
    <Heading />
    <Syallbus />
    <Subsections />
    </>
  );
}

export default App;
