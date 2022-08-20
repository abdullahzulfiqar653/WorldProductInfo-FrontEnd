import "./App.css";
import "./main.css";
import store from "./store/store";
import { Provider } from "react-redux";
import Home from "./components/home/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import ListDetails from "./components/ListPage/ListDetails";
import ProductDetailPage from "./components/ProductDetailsPage/ProductDetailPage";
function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route
          path="/product-list/:categoryid/:valueid?/:manufacturerid?"
          component={ListDetails}
        />
        <Route exact path="/product/:productid" component={ProductDetailPage} />
        <Redirect path="/" exact to="/home" />
      </Switch>
    </Provider>
  );
}

export default App;
