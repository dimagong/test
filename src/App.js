import React, { useEffect, useState } from 'react';
import './App.css';

import DataFetch from './services/api/request/api'
import NumberAndNameMounth from "./services/api/handler/numberName";
import AddNumberPerson from './services/api/handler/addNumber';
import ShortDaraSort from './services/api/handler/shortData';
import ColorApp from './services/api/handler/colorApp';

import BlockComponent from './component/Block.component.jsx';

const App = () => {

  const [data, onData] = useState([]);

  useEffect(
    () => DataFetch(onData),
    []
  )

  let dataMonth = NumberAndNameMounth(data);

  AddNumberPerson(dataMonth);

  const shortData = ShortDaraSort(dataMonth);

  return (
    <div className="app">
      <ul className="list__data">
        <BlockComponent shortData={shortData} ColorApp={ColorApp} />
      </ul>
    </div>
  );
}

export default App;
