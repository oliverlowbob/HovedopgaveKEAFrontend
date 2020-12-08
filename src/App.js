import './App.css';
import React from 'react';  
import logo from './logo.svg';  
import MatTable from './MatTable'  
import MatPaginationTable from "./MatPaginationTable"; 

// function App() {
//   return (
    
//     <div className="App">
//       <header className="App-header">
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
// }

function App() {  
    return (  
      <div className="App">  
      <MatPaginationTable/>  
      {/* <MatTable/> */}  
      </div>  
    );  
  } 

export default App;
