import axios from 'axios';

class ProductService{
    constructor(){
        this.baseUrl="http://localhost:7071/";
   }
    getProducts(){
        return axios.get(this.baseUrl+"products");
    }

    addProduct(prod){
        return axios.post(this.baseUrl+"product",prod)
    }

    // deleteProduct(id){
    //     return axios.delete(this.baseUrl+"product/"+id)

    // }
    // updateProduct(emp){
    //     return axios.put(this.baseUrl+"product/"+emp.empid,emp)
    // }

}

export default new ProductService();