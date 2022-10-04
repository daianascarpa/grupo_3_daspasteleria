import React from 'react';


function Product(props){
    return(
       
        <div className="products">
            
                <div className="product-data id">
                    {props.id}
                </div>
                <div className="product-data product-name">
                    {props.product_name}
                </div>
                <div className="product-data product-description">
                    {props.product_description} 
                </div>
                <div className="product-data product-category">
                    {props.category[0]} 
                </div>
        </div>
        
    )
}

export default Product;