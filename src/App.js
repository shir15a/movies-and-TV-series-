import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import SimpleBottomNavigation from './Components/MainNav';

import { Container } from '@material-ui/core';
import { inisializeLocal } from './LocalStorage/LocalStorage';

import Trending from './Components/Pages/Trending/Trending';
import Series from './Components/Pages/Series/Series';
import Search from './Components/Pages/Search/Search';
import MyFav from './Components/Pages/MyFav/MyFav';

import './App.css';



function App() {

  useEffect(() => {
    inisializeLocal();

  }, []);


  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Container>
          <Switch >
            {/* <Route path='/' component={Trending} exact /> */}
            <Route path='/' component={Trending} exact />
            <Route path='/series' children={<Series type='TV series' />} />
            <Route path='/movies' children={<Series type='movies' />} />
            <Route path='/search' component={Search} />
            <Route path='/MyFav' component={MyFav} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

