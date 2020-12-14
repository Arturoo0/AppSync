import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Pages';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
