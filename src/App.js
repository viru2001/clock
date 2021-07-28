import Stopwatch from "./components/Stopwatch";
import Navbar from "./components/Navbar";
import Clock from "./components/Clock";
import Countdown from "./components/Countdown";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/clock" render={()=>{
            return <Clock />
          }}>
          </Route>

          <Route exact path="/stopwatch">
            <Stopwatch />
          </Route>
          <Route exact path="/countdown">
            <Countdown />
          </Route>

      </Switch>
    </Router>
  )
}

export default App;
