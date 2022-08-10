import "./App.css";
import "./main.css";
import Home from "./components/home/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import ListDetails from "./components/ListPage/ListDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/product-list" component={ListDetails} />
        <Redirect path="/" exact to="/home" />
      </Switch>
    </div>
  );
}

export default App;
