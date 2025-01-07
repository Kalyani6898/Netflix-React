import Body from "./components/Body";
import "./App.css";
import { Provider } from "react-redux";
import appStore from "./util/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="font-bold text-">
        <Body />
      </div>
    </Provider>
  );
}
export default App;
