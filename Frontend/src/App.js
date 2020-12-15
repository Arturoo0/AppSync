import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginPage, SignupPage } from './Pages';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
