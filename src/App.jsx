import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/MainDiv/MainDiv';

class App extends React.Component {

  render() {
    
    return (
      <>
        <Header />
        <Main leads={this.props.leads} />
        <Footer />
      </>
    );
  }
}

export default App;