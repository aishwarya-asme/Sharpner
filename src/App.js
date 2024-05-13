import './App.css';
import Body from './Pages/Body';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import {ContextProvider} from "./Store/Context"
function App() {
  return (
    <>
    <ContextProvider>
   
      <Header/>
      <Body/>
      <Footer/>
      </ContextProvider>
    </>
  );
}

export default App;
