import React from "react";
import 'antd/dist/antd.css';
import MainComponents from "./Components/MainComponents";
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configurationStore';
const store = ConfigureStore();
function App() {
  return (
    <Provider store= {store} >
      <div className="App">
        <MainComponents />
      </div>
    </Provider>
  );
}

export default App;
