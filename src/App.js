import React, { Component } from 'react';
import Post from '../src/components/Post/Post.js';
// Post.css may not belong in this file...
// import '../src/components/Post/Post.css';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Post />
      </div>
    );
  }
}


// Below is from previous homework
// export default class Logo extends React.Component {
//   render() {
//     return (
//     <div className="App">
//       <header className="App-header">
//         <img src={Logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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
// }}


// export default Logo;
