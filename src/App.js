import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider, useDispatch } from "react-redux";

function App() {
  return (
    // <div className="text-4xl font-bold">
    //   Hello Everyone
    // </div>
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
