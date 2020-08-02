import React from 'react';
import Bookcontextprovider from './contexts/Bookcontext';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import Bookform from './components/Bookform';


function App() {
  return (
    <div className="App">
      <Bookcontextprovider>
        <Navbar/>
        <Booklist />
        <Bookform/>
      </Bookcontextprovider>
    </div>
  );
}

export default App;
