import React from 'react';
import { GlobalStyle } from './style';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div>
      <Provider store={store}>
         <Header />
         <GlobalStyle />
         helloworld
     </Provider>
    </div>
  );
}

export default App;
