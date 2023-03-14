import { useState } from "react"
import Apis from "../../api/Apis";

export default function AddProducts() {

  const [loading, setLoading] = useState(false)
  const [productData, setProfuctData] = useState({
    name:'',
    image:'',
    category:'',
    price:'',
    description:'',
  });

  const Api = new Apis;
  const addPro = () => { 
    setLoading(true);
    const fdata = new FormData;
    fdata.append("name", productData.name );
    fdata.append("thumb", productData.image );
    fdata.append("description", productData.description );
    fdata.append("price", productData.price );
    fdata.append("category", productData.category );

    const resp = Api.Add_Product(fdata);
    resp.then((res)=>{
      console.log("res", res);
      setLoading(false);
    }).catch((err)=>{
      console.log("err", err);
      setLoading(false);
    });
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
              {loading && <h6>Loading .....</h6>}
              <div  className="col-md-12" >
                <button onClick={addPro} className="btn btn-primary mt-3" >Add Products</button>
              </div>
            </div>
        </div>
      </div>
    </div>

  </>
}