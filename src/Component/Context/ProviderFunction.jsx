import React, { useState } from 'react';
import createStore from './createStore';

const ProviderFunction = ({ children }) => {
  const [data, setData] = useState("");  

  return (
    <createStore.Provider value={{ data, setData }}>
      {children}
    </createStore.Provider>
  );
};

export default ProviderFunction;
