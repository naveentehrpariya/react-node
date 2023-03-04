import { useState } from "react"

export default function AddProducts() {


  const [productData, setProfuctData] = useState({
    name:'',
    image:'',
    category:'',
    price:'',
    description:'',
  });

  const addPro = () => { 

  }

  const handleInput = (e) => { 
    const ivalue = e.target.value;
    let  inputname = e.target.name;
    setProfuctData({...productData, [inputname]:ivalue})
     console.table(productData);
  }


  return <>
    <div className="product ">
      <div className="container">
        <div className="product-in inputform shadow-md p-4 roinded-3 my-4 ">
             <h4 className="mb-3">Add Product</h4>
            <div className="row">

              <div  className="col-md-6 mb-4" >
                  <input  onChange={handleInput}type="text" name="name" className="form-control"  placeholder="Enter Your Product Title"/>
              </div>
              <div  className="col-md-6 mb-4" >
              <input onChange={handleInput} type="file" name="image" className="form-control" placeholder="Choose File" />

              </div>
              <div  className="col-md-6 mb-4" >
              <input onChange={handleInput} type="text" name="category" placeholder="Category" className="form-control" />

              </div>
              <div  className="col-md-6 mb-4" >
              <input onChange={handleInput} type="number" name="price" className="form-control"  placeholder="Price" />

              </div>
              <div  className="col-md-12 mb-4" >
              <input onChange={handleInput} type="text"  name="description" className="form-control" placeholder="Enter Your Product Description"/>

              </div>
              <div  className="col-md-12" >
              <button className="btn btn-primary mt-3" >Submit Items</button>
              </div>
            </div>
        </div>
      </div>
    </div>

  </>
}