import React from 'react';
import { GlobalStyle } from './style';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
function App() {
  return (
    <div>
      <Provider store={store}>
        <div>
           <Header />
           <GlobalStyle />
           <BrowserRouter>
              <Route path="/" exact component={Home}/>
              <Route path="/detail" exact component={Detail}/>
           </BrowserRouter>
         </div>
     </Provider>
    </div>
  );
}

export default App;
