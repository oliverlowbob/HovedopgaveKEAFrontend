// import React, { Component } from 'react'  

// import Table from '@material-ui/core/Table';  

// import TableBody from '@material-ui/core/TableBody';  

// import TableCell from '@material-ui/core/TableCell';  

// import TableContainer from '@material-ui/core/TableContainer';  

// import TableHead from '@material-ui/core/TableHead';  

// import TableRow from '@material-ui/core/TableRow';  

// import Paper from '@material-ui/core/Paper';  

// import axios from 'axios';  

  

// export class MatTable extends Component {  

//   constructor(props) {  

//     super(props)  

//     this.state = {  

//       ProductData: []  

  

//     }  

//   }  

//   componentDidMount() {  

//     axios.get('http://localhost:51760/Api/Emp/employee').then(response => {  
//       console.log(response.data);  
//       this.setState({  
//         ProductData: response.data  
//       });  
//     });  
//   }  
//   render() {  
//     console.log(this.state.ProductData);  
//     return (  
//       <TableContainer component={Paper}>  
//         <Table stickyHeader  aria-label="sticky table">  
//           <TableHead>  
//             <TableRow>  
//               <TableCell>Id</TableCell>  
//               <TableCell align="right">Name</TableCell>  
//               <TableCell align="right">Age</TableCell>  
//               <TableCell align="right">Address</TableCell>  
//               <TableCell align="right">City</TableCell>  
//               <TableCell align="right">ContactNum</TableCell>  
//               <TableCell align="right">Salary</TableCell>  
//               <TableCell style={{paddingRight:"60px"}} align="right" >Department</TableCell>  
//             </TableRow>  
//           </TableHead>  
//           <TableBody>  
//             {  
//               this.state.ProductData.map((p, index) => {  
//                 return <TableRow key={index}>  
//                   <TableCell component="th" scope="row">  
//                     {p.Id}  
//                   </TableCell>  
//                   <TableCell align="right">{p.Name}</TableCell>  
//                   <TableCell align="right">{p.Age}</TableCell>  
//                   <TableCell align="right">{p.Address}</TableCell>  
//                   <TableCell align="right">{p.City}</TableCell>  
//                   <TableCell align="right">{p.ContactNum}</TableCell>  
//                   <TableCell align="right">{p.Salary}</TableCell>  
//                   <TableCell style={{paddingRight:"114px"}} align="right">{p.Department}</TableCell>  
//                 </TableRow>  
//               })  
//             }  
//           </TableBody>  
//         </Table>  
//       </TableContainer>  
//     );  
//   }  
// }  
  
// export default MatTable