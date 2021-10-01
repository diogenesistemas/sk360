import {BrowserRouter, Route} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';

import { Home } from "./pages/Home";
import { NewSkillResearch } from "./pages/NewSkillResearch";

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
         <Route path="/" exact component={Home}/>
         <Route path="/skills/new" component={NewSkillResearch}/>
      </AuthContextProvider>
    </BrowserRouter>  
  );
}
