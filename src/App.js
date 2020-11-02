// import logo from './logo.svg';
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import './App.css';
// import getAllEmployees from './utils/Api';
// import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;

// class App extends Component {
//   //const employees = getAllEmployees()
//   state = {
//     employees: getAllEmployees()
//   } 

//   render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
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
//         {this.state.employees.map((employee, index) => {
//           return <>
//         })}
//       </header>
//     </div>
//   );
// }}


