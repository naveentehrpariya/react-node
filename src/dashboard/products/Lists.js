import Model1 from "../../images/model1.jpg";

export default function Lists() {
    return <>
        <div className="lists py-5 ">
            <div className="container">
                <h2 className="mb-4" >Shop</h2>
                <div className="row">

                    <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
                        <div className="item-1">
                            <div className="image">
                                <img src={Model1} alt="img" />
                            </div>
                            <div className="detailspr">
                                <h2 className="titletext">product 1</h2>
                                <h3 className="price">$ 300</h3>
                            </div> 
                        </div>
                    </div>

 
                </div>
            </div>
        </div>
    </>
}