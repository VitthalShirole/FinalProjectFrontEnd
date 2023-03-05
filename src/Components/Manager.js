import {Link,useHistory} from 'react-router-dom';

const Gold =()=>{
    return(

<div>
<Link to="/list">
         <button type="button" name="btn" id="btn" className="btn btn-success">ProductDetails</button>
    </Link> 
    <div></div>
<Link to="/list">
         <button type="button" name="btn" id="btn" className="btn btn-success">StaffDetails</button>
</Link>   
 </div>
    


    )
}

export default Gold;