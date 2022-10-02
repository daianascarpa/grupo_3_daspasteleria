import React from 'react';


function Product(props){
    return(
       
        <div className="products">
            
                <div className="product-data">
                    {props.id}
                </div>
                <div className="product-data">
                    {props.product_name}
                </div>
                <div className="product-data">
                    {props.product_description} 
                </div>
                <div className="product-data">
                    {props.category[0]} 
                </div>
        </div>
        
    )
}

export default Product;