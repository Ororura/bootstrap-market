import Routs from "../../constants/Routes";
import { ProductProvider } from "../../core/Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <ProductProvider>
        <Switch>
          {Routs.map((el) => (
            <Route key={el.path} path={el.path} component={el.component} exact />
          ))}
        </Switch>
      </ProductProvider>
    </Router>
  );
}

export default App;
