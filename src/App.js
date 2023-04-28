import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar/>
        <SearchBar/>
      </React.Fragment>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
