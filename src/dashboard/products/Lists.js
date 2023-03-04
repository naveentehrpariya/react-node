import Model1 from "../../images/model1.jpg"
import Model2 from "../../images/model2.jpg"
import Model3 from "../../images/model3.jpg"
import Model4 from "../../images/model4.jpg"
import Model5 from "../../images/model5.jpg"
export default function Lists() {
    return <>
        <div className="lists">
            <div className="container">
                <div className="lists-in">
                    <div className="item-1">
                        <div className="image">
                            <img src={Model1} alt="img" />
                        </div>
                        <div className="text">
                            product 1
                        </div>
                        <div className="price">
                            $ 300
                        </div>
                    </div>


                    <div className="item-1">
                        <div className="image">
                            <img src={Model2} alt="img" />
                        </div>
                        <div className="text">
                            product 2
                        </div>
                        <div className="price">
                            $ 300
                        </div>
                    </div>



                    <div className="item-1">
                        <div className="image">
                            <img src={Model3} alt="img" />
                        </div>
                        <div className="text">
                            product 3
                        </div>
                        <div className="price">
                            $ 300
                        </div>
                    </div>



                    <div className="item-1">
                        <div className="image">
                            <img src={Model4} alt="img" />
                        </div>
                        <div className="text">
                            product 4
                        </div>
                        <div className="price">
                            $ 300
                        </div>
                    </div>



                    <div className="item-1">
                        <div className="image">
                            <img src={Model5} alt="img" />
                        </div>
                        <div className="text">
                            product 5
                        </div>
                        <div className="price">
                            $ 300
                        </div>
                    </div>



                    <div className="item-1">
                        <div className="image">
                            <img src={Model1} alt="img" />
                        </div>
                        <div className="text">
                            product 6
                        </div>
                        <div className="price">
                            $ 300
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}