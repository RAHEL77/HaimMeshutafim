import './App.css';
import Songlist from './components/Songlist';
import Poempage from './components/Poempage';
import NotFound from "./components/NotFound";
import {BrowserRouter , Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';


function App() {
  return (
    <div >
      <BrowserRouter>
       <Header />  
      {/* <Helmet>
        <title>Haakaa Israel</title>
        <meta name="Haakaa Israel" content="Haakaa Israel" />
        </Helmet> */}
   <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/header/:category" component={Header} />
      <Route exact path="/Songlist" component={Songlist} />
      <Route exact path="/Poempage" component={Poempage} />

      <Route component={NotFound} />
    
      </Switch >
     
  </BrowserRouter>
  {/* <Footer /> */}
  
    
    </div>
  );
}

export default App;
