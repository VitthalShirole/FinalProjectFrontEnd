import { useEffect,useState } from "react";
import { useLocation ,useHistory} from "react-router-dom";
import EmployeeService from "./EmployeeService";
const EmployeeEdit=()=>{
    let [empob,setempob]=useState({id:"",staffname:"",contactno:"",categoryid:"", managerId:""});
    let state=useLocation().state;
    let history=useHistory();

    // useEffect(()=>{
    //     setempob({...state.employee})

    // },[])
    const updateData=()=>{
        EmployeeService.updateemeployee(empob)
        .then((result)=>{
            console.log(result.data);
            history.push("/list");
        })
        .catch(()=>{})
    }
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setempob({...empob,[name]:value});
    }
    return(
        <div>
 <form>
  <div className="form-group">
    <label htmlFor="empid">Staff Id</label>
    <input type="text" className="form-control" name="id" id="id" 
    value={empob.id}
    onChange={handleChange}
    placeholder="Enter empid"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="ename">Employee Name</label>
    <input type="text" className="form-control" name="staffname" id="staffname"
     value={empob.staffname}
     onChange={handleChange}
     placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <label htmlFor="sal">Employee Salary</label>
    <input type="text" className="form-control" name="contactno" id="contactno"
     value={empob.contactno}
     onChange={handleChange}
     placeholder="Enter Salary"/>
  </div>
  <div className="form-group">
    <label htmlFor="sal">Employee Salary</label>
    <input type="text" className="form-control" name="categoryid" id="categoryid"
     value={empob.categoryid}
     onChange={handleChange}
     placeholder="Enter Salary"/>
  </div>
  <div className="form-group">
    <label htmlFor="sal">Employee Salary</label>
    <input type="text" className="form-control" name="managerId" id="managerId"
     value={empob.managerId}
     onChange={handleChange}
     placeholder="Enter Salary"/>
  </div>
  <button type="button" class="btn btn-primary" onClick={updateData}>update Employee</button>
</form>
        </div>
        
    )
}

export default EmployeeEdit;