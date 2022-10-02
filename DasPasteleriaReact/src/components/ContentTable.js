import React from 'react';
import {useState, useEffect} from 'react';
import Product from './Product';

 let productos = [
    {
        id: 1,
        product_name: "Cupcakes Emoji",
        product_description: "consequat varius integer ac leo pellentesque",
        category: [
            "Muffins"
        ]

    },
    {
        id: 3,
        product_name: "Cheesecake",
        product_description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        category: [
            "Torta"
        ]
    }
 ]


function ContentTable(){
    const [products, setProducts]= useState([])
    

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setProducts(data.respuesta.Products)
            
        })
        .catch(error=>console.error(error))  
        }, [])





     return (
        <div className='table-container'>
        <div className="product-titulos">
        <div className="ul-titulo">
          <p>ID</p>
        </div>
        <div className="ul-titulo">
          <p>PRODUCTO</p>
        </div>
        <div className="ul-titulo">
          <p>DESCRIPCION</p>
        </div>
        <div className="ul-titulo">
          <p>CATEGORIA</p>
        </div>
        </div>

         <div>
             { 
                 products.map( (item, i) => {
                 return <Product {...item} key={i}/>
             })
             } 
         </div>
         </div>
    );
}

export default ContentTable;