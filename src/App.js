import React from 'react';
import './App.css';
import Calculator from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
