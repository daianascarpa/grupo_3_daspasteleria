import {useState, useEffect} from 'react';
import React from "react";
import Category from './Category';

let tortas= {
    title: 'Tortas',
    quantity: 21,
    //icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let tartas = {
    title:' Tartas', 
    quantity: '79',
    //icon:'fa-award'
}

/* <!-- Actors quantity --> */

let muffins = {
    title:'Muffins' ,
    quantity:'49',
    //icon:'fa-user-check'
}

let cookies= {
    title: 'Cookies',
    quantity: 21,
    //icon: 'fa-clipboard-list'
}

 let categories = [tortas, tartas, muffins, cookies];





function ProductCategory() {
    const [categories, setCategories]= useState([])

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setCategories(data.respuesta.countByGroup)
            console.log(data.respuesta.countByGroup)
        })
        .catch(error=>console.error(error))  
        }, [])



let categoriesProp = Object.keys(categories).map(function (key) {return {title:key , quantity:categories[key]};});


    return (
        <React.Fragment>
                
                <div className="pc-row shadow">						
                    <div>
                        <div className="title-wrapper">
                            <h4 className="title">Categorías de Productos</h4>
                        </div>
                        <div className="card-body">
                            <div className="pc-cards-wrapper">
                                {
                                  categoriesProp.map((category,index)=>{
                                      return  <Category  {...category}  key={index} />
                                  })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}

export default ProductCategory;