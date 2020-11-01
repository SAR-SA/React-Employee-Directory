import logo from './logo.svg';
import React, {Component} from "react";
import './App.css';
import getAllEmployees from './utils/Api';
import Row from './components/Row';

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        
      </Wrapper>
    </div>
  )
}



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

// export default App;
