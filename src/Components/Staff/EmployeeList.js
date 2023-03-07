import { useEffect, useState} from "react";
import EmployeeService from './EmployeeService';
import {Link,useHistory} from 'react-router-dom';

const EmployeeList=()=>{
    let [emparr,setemparr] =useState([]);
    let [flag,setflag]=useState(false);
    let history=useHistory();
    //initialization data
    useEffect(()=>{
     EmployeeService.getEmployees().
     then((response)=>{
        console.log("in useffect of emplist initialization");
        console.log(response.data);
        setemparr(response.data);
     })
     .catch((err)=>{console.log("error occured",err)});

    },[]);
    useEffect(()=>{
        EmployeeService.getEmployees().
        then((response)=>{
           console.log("in useffect of emplist initialization");
           console.log(response.data);
           setemparr(response.data);
        })
        .catch((err)=>{console.log("error occured",err)});
   
       },[flag]); 
    const deleteData=(id)=>{
        EmployeeService.deleteEmployee(id)
        .then((result)=>{
            console.log(result.data);
            history.push("/");
           setflag(true);
        })
        .catch((err)=>{
            console.log("error occured",err);
        })

    }
    const renderList=()=>{
        return emparr.map((emp)=>{
            return <tr key={emp.id}><td>{emp.id}</td><td>{emp.staffname}</td><td>{emp.subcategory}</td>
            <td>
                <button type="button" className="btn btn-danger" name='btn' id="delete" onClick={()=>deleteData(emp.empid)}>Delete</button>
                &nbsp;&nbsp;&nbsp;
                <Link to={{pathname:`/edit/${emp.id}`,state:{employee:emp}}}>
                     <button type="button" className="btn btn-primary" name='btn' id="edit">Edit</button>
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link to={{pathname:`/view/${emp.id}`,state:{employee:emp}}}>
                    <button type="button" className="btn btn-success" name='btn' id="view">View</button>
                </Link>
            </td></tr>
        });
    }
    return(
        <div>
        <Link to="/addemp">
            <button type="button" name="btn" id="btn" className="btn btn-primary">Add Employee</button>
        </Link>
        <table border="2"><thead>
        <tr><th>Staff ID</th><th>Name</th><th>Category</th></tr>
        </thead>
        <tbody>
            {renderList()}
        </tbody>
        </table>
        </div>
    )
}

export default EmployeeList;