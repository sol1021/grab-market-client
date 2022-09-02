import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png" alt="로고 이미지" />
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path={"/"} component={MainPageComponent}></Route>
          <Route exact={true} path={"/product/:id"} component={ProductPage}></Route>
          <Route exact={true} path={"/upload"} component={UploadPage}></Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
