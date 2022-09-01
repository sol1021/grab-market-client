import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={"/"} component={MainPageComponent}></Route>
        <Route exact={true} path={"/product/:id"} component={ProductPage}></Route>
        <Route exact={true} path={"/upload"} component={UploadPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
