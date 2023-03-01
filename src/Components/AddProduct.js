import {Link,useHistory} from 'react-router-dom';
import {useState} from 'react';
import ProductServices from './ProductServices';



const AddProduct =()=>{

    

     let [prodob , setprodob]= useState({product_name:"",product_categorie:"",product_sub_categorie:"",product_weight:"",product_price:"",product_image:""});
     let history=useHistory();
     const handleChange=(event)=>{
        const {name, value}=event.target;
        setprodob({...prodob,[name]:value});
     }
    const addData=()=>{
        ProductServices.addProduct(prodob)
        .then((result)=>
         {
            console.log(result.data);
            
         }).catch(()=>{})

        
        }



    return(
      

 <form class="form-horizontal">
<fieldset>

<legend>PRODUCTS</legend> 




 
 <div align="left"class="form-group">
  <label   class="col-md-4 control-label" for="product_name">PRODUCT NAME</label>  
  <div class="col-md-4">
  <input id="product_name" name="product_name" placeholder="PRODUCT NAME" class="form-control input-md" 
  required="" type="text"
  value={prodob.product_name}
  onChange={handleChange}/>
    
  </div>
</div>  




<div align="left" class="form-group">
  <label class="col-md-4 control-label" for="product_categorie">PRODUCT CATEGORY</label>
  <div class="col-md-4">
    <select onChange={handleChange} id="product_categorie" name="product_categorie" class="form-control">
    <option value="null">---Select Categorie--- </option>
    <option value="Gold">Gold</option>
  <option value="Silver">Silver</option>
  <option value="Platinum">Platinum</option>
  <option value="Diamond">Diamond</option>
  <option value="Bullion">Bullion</option>
  <option value="Antique">Antique</option>
  <option value="1Gram">1Gram</option>
  <option value="Other">Other</option>
    </select>
  </div>
</div>

<div align="left" class="form-group">
  <label class="col-md-4 control-label" for="product_sub_categorie">PRODUCT SUB CATEGORY</label>
  <div class="col-md-4">
    <select  onChange={handleChange} id="product_sub_categorie" name="product_sub_categorie" class="form-control">
    <option value="null">---Select Sub Categorie--- </option>
    <option value="Manalsutra">Manalsutra</option>
  <option value="Ring">Ring</option>
  <option value="Chain">Chain</option>
  <option value="Pendant">Pendant</option>
  <option value="Bangles">Bangles</option>
  <option value="Braclet">Braclet</option>
  <option value="Neacklace">Neacklace</option>
  <option value="Other">Other</option>
    </select>
  </div>
</div> 


 <div align="left" class="form-group">
  <label class="col-md-4 control-label" for="product_weight">PRODUCT WEIGHT</label>  
  <div class="col-md-4">
  <input type="text" id="product_weight" name="product_weight" placeholder="PRODUCT WEIGHT" class="form-control input-md" required="" 
  value={prodob.product_weight}
  onChange={handleChange}/>
    
  </div>
</div> 

 <div align="left" class="form-group">
  <label class="col-md-4 control-label" for="product_price">PRODUCT PRICE</label>  
  <div class="col-md-4">
  <input id="product_price" name="product_price" placeholder="PRODUCT PRICE" class="form-control input-md" required="" type="text"
   value={prodob.product_price}
   onChange={handleChange}/>
    
  </div>
</div> 

<div align="left" class="form-group">
  <label class="col-md-4 control-label" for="product_image">SELECT IMAGE</label>
  <div class="col-md-4">
    <input id="product_image" name="product_image" class="input-file" type="file"
    value={prodob.product_image}
    onChange={handleChange}/>
  </div>
</div> 



   
   <button type="button" class="btn btn-primary" onClick={addData}>Add Product</button>
 
  </fieldset>
  </form> 

    )
}
  
      export default AddProduct;
      // <button id="singlebutton" name="singlebutton" class="btn btn-primary">ADD</button>