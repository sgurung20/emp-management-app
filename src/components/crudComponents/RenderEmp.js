import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from "./services/EmployeeService"


function RenderEmp() {

  const [employees, setEmployees] = useState([]);
   
  const init = () => {
    EmployeeService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.log('Error', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  return (

    <div className="container">
    <Link to="/add" className="btn btn-primary mb-2 mt-2">Add Employee</Link>
    <h3>List of Employees</h3>
    <div>

        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Country</th>
              <th>Wage</th>
              <th>Modify</th>
            </tr>
          </thead>
         
         <tbody>
          {
            employees.map(employee =>(
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.country}</td>
                <td>{employee.wage}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
    </div>
  </div>
  )
}

export default RenderEmp