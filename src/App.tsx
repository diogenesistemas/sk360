import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { RadarChart } from './components/RadarChart';
import { AuthContextProvider } from './context/AuthContext';

import { Home } from "./pages/Home";
import { NewSkillResearch } from "./pages/NewSkillResearch";
import { Skill } from './pages/Skill';

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/skills/new" component={NewSkillResearch}/>
          <Route path="/skills/:id" component={Skill}/>
          <Route path="/radar" component={RadarChart}/>
         </Switch>
      </AuthContextProvider>
    </BrowserRouter>  
  );
}
