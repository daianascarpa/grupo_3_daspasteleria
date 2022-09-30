import {useState, useEffect} from 'react';
import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let totalUsuarios= {
    // title: 'Movies in Data Base',
    // cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalProductos = {
    // title:' Total awards', 
    // cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let totalCategorias = {
    //title:'Actors quantity' ,
    //cuantity:'49',
    icon:'fa-user-check'
}

// let cartProps = [totalUsuarios, totalProductos, totalCategorias];

function ContentRowTop(){
    const [ countUsers , setCountUsers] = useState([])
    const [countProducts, setCountProducts]= useState([])
    const [categories, setCategories]= useState([])

    useEffect(() => {
      fetch('http://localhost:3030/api/users')
      .then(respuesta=> respuesta.json())
      .then(data=>{
        //console.log(data)
        setCountUsers(data.respuesta.count)
        //setLastUser(data.respuesta.users[data.respuesta.users.length-1])
        //console.log(data.respuesta.count)
      })
      .catch(error=>console.error(error))  
    }, [])


     useEffect(() => {
         fetch('http://localhost:3030/api/products')
         .then(res=> res.json())
         .then(data=>{
             console.log(data)
             setCountProducts(data.respuesta.count)
             setCategories(Object.keys(data.respuesta.countByGroup).length)
         })
         .catch(error=>console.error(error))  
         }, [])

    let totalUsuarios= {
        title: 'Usuarios',
        quantity: countUsers,
        icon: 'fa-users'
    } 
    let totalProductos= {
        title: 'Productos',
        quantity: countProducts,
        icon: 'fa-solid fa-cake-candles',
    }
    let totalCategorias= {
        title: 'Categorias',
        quantity: categories,
        icon: 'fa-solid fa-star',
    }

    

    let cartProps = [totalUsuarios, totalProductos, totalCategorias]

    return (

        <div className="row">





{ 
            
            
            
                cartProps.map( (item, i) => {

                return <SmallCard {...item} key={i}/>
            
            })} 
            
            
             

        </div>
    );
}

export default ContentRowTop;