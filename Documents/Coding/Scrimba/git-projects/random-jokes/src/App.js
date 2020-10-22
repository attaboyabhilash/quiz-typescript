import React, { Component } from 'react';
import JokesContextProvider from './contexts/JokesContext'
import Header from './components/Header'
import Mainframe from './components/Mainframe'
import Copyright from './components/Copyright'

class App extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <JokesContextProvider>
          <Mainframe />
        </JokesContextProvider>
        <Copyright />
      </div>
    )
  }
}

export default App;
