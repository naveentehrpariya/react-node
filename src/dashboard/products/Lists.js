import Model1 from "../../images/model1.jpg";

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 

export default function Lists() {
       
    const data = [
        { "_id": {
            "$oid": "6411f819bf4df8a0961268e5"
          },
          "name": "Iphone 11",
          "description": "Iphone 11 products red color with triple camera",
          "price": 150000,
          "category": "Electronics",
          "thumb": "https://cdn.pixabay.com/photo/2020/04/10/00/13/iphone-pro-max-5023497_1280.jpg",
          "__v": 0
        },
        { "_id": {
            "$oid": "6411f819bf4df8a0961268e5"
          },
          "name": "Iphone 11",
          "description": "Iphone 11 products red color with triple camera",
          "price": 150000,
          "category": "Electronics",
          "thumb": "https://cdn.pixabay.com/photo/2020/04/10/00/13/iphone-pro-max-5023497_1280.jpg",
          "__v": 0
        },
        { "_id": {
            "$oid": "6411f819bf4df8a0961268e5"
          },
          "name": "Iphone 11",
          "description": "Iphone 11 products red color with triple camera",
          "price": 150000,
          "category": "Electronics",
          "thumb": "https://cdn.pixabay.com/photo/2020/04/10/00/13/iphone-pro-max-5023497_1280.jpg",
          "__v": 0
        },
        { "_id": {
            "$oid": "6411f819bf4df8a0961268e5"
          },
          "name": "Iphone 11",
          "description": "Iphone 11 products red color with triple camera",
          "price": 150000,
          "category": "Electronics",
          "thumb": "https://cdn.pixabay.com/photo/2020/04/10/00/13/iphone-pro-max-5023497_1280.jpg",
          "__v": 0
        },
        { "_id": {
            "$oid": "6411f819bf4df8a0961268e5"
          },
          "name": "Iphone 11",
          "description": "Iphone 11 products red color with triple camera",
          "price": 150000,
          "category": "Electronics",
          "thumb": "https://cdn.pixabay.com/photo/2020/04/10/00/13/iphone-pro-max-5023497_1280.jpg",
          "__v": 0
        },
        { "_id": {
            "$oid": "6411f819bf4df8a0961268e5"
          },
          "name": "Iphone 11",
          "description": "Iphone 11 products red color with triple camera",
          "price": 150000,
          "category": "Electronics",
          "thumb": "https://cdn.pixabay.com/photo/2020/04/10/00/13/iphone-pro-max-5023497_1280.jpg",
          "__v": 0
        },
        { "_id": {
            "$oid": "6411f819bf4df8a0961268e5"
          },
          "name": "Iphone 11",
          "description": "Iphone 11 products red color with triple camera",
          "price": 150000,
          "category": "Electronics",
          "thumb": "https://cdn.pixabay.com/photo/2020/04/10/00/13/iphone-pro-max-5023497_1280.jpg",
          "__v": 0
        },
        { "_id": {
            "$oid": "6411f819bf4df8a0961268e5"
          },
          "name": "Iphone 11",
          "description": "Iphone 11 products red color with triple camera",
          "price": 150000,
          "category": "Electronics",
          "thumb": "https://cdn.pixabay.com/photo/2020/04/10/00/13/iphone-pro-max-5023497_1280.jpg",
          "__v": 0
        },
        { "_id": {
            "$oid": "6411f819bf4df8a0961268e5"
          },
          "name": "Iphone 11",
          "description": "Iphone 11 products red color with triple camera",
          "price": 150000,
          "category": "Electronics",
          "thumb": "https://cdn.pixabay.com/photo/2020/04/10/00/13/iphone-pro-max-5023497_1280.jpg",
          "__v": 0
        },
        { "_id": {
            "$oid": "6411f819bf4df8a0961268e5"
          },
          "name": "Iphone 11",
          "description": "Iphone 11 products red color with triple camera",
          "price": 150000,
          "category": "Electronics",
          "thumb": "https://cdn.pixabay.com/photo/2020/04/10/00/13/iphone-pro-max-5023497_1280.jpg",
          "__v": 0
        },
        { "_id": {
            "$oid": "6411f819bf4df8a0961268e5"
          },
          "name": "Iphone 11",
          "description": "Iphone 11 products red color with triple camera",
          "price": 150000,
          "category": "Electronics",
          "thumb": "https://cdn.pixabay.com/photo/2020/04/10/00/13/iphone-pro-max-5023497_1280.jpg",
          "__v": 0
        },
    ]

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const UpdateModal = () => { 
        return (
            <>
            
            </>
        );
    }

    return <>
        <div className="lists py-5 ">
            <div className="container">
                <h2 className="mb-4 heading" >Shop</h2>
                <div className="row">
                                        <UpdateModal />
                    {data.map((product, i)=>{
                        return <div key={i} className="col-lg-3 col-md-3 col-sm-6 mb-4">
                                <div className="item-1">
                                    <div className="image">
                                        <img src={product.thumb} alt="img" />
                                    </div>
                                    <div className="detailspr">
                                        <h2 className="titletext mb-2">{product.name}</h2>
                                        <h3 className="price mb-2">$ 300</h3>
                                    </div>
                                </div>
                            </div>
                    })}
                </div>

                <Button variant="primary" onClick={()=>handleShow}>
                Update
            </Button>
        
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    </>
}