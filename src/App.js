import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={name: 'James'}
  }
  
  render() {
    const name=this.state.name;

    return (
      <div>
        <h1>Hello, {name}.</h1>
        <input
          type="text"
          value={name}
          onChange={ e => {
            this.setState({
              name: e.target.value
            })
          }}
        />
      </div>
    );
  }
  
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save tototo reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
