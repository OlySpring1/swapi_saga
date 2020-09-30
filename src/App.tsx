import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { GlobalStyles } from './components/Global.styles';
import Search from './components/Search/Search';
import { Spinner } from './components/Spinner/Spinner';
import PersonList from './components/PersonList/PersonList';
import { getIsLoading } from './store/selectors';

const App = () => {
  const loading = useSelector(getIsLoading)
  return (
    <div >
      <GlobalStyles />
      {loading && <Spinner />}
      <Search />
      <PersonList />
    </div>
  );
}
export default App;
