import "./App.css";
import "./main.css";
import Home from "./components/home/Home";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import ListDetails from "./components/ListPage/ListDetails";
import ProductDetailPage from "./components/ProductDetailsPage/ProductDetailPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/product-list/:categoryid/" component={ListDetails} />
        <Route exact path="/product/:productid" component={ProductDetailPage} />
        <Redirect path="/" exact to="/home" />
      </Switch>
    </div>
  );
}

export default App;
