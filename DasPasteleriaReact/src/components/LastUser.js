import React from 'react';
import {useState, useEffect} from 'react';
//import imagenFondo from '../assets/img/DAS_logo.png';

function LastUser(){
        const [detalleLastUser, setDetalleLastUser] = useState([])

        async function getUser() {
            let response = await fetch('http://localhost:3030/api/users');
            let userData = await response.json();
            let  lastUser = userData.respuesta.users[userData.respuesta.users.length-1]
            return lastUser; 
           }
    
    getUser()
    .then(respuesta =>{ 
        console.log(respuesta)
    })
    .catch(err=>{
        console.log(err)
    })

    useEffect(() => {
        getUser()
            .then(respuesta =>{ 
              fetch('http://localhost:3030/api/users/'+respuesta.id)
              .then(respuesta=> respuesta.json())
              .then(data=>{
                  console.log(data)
                  setDetalleLastUser(data.respuesta.user)
                 })
        })
              .catch(error=>console.error(error))  
            },[])




    // useEffect(() => {
    //   fetch('http://localhost:3030/api/users')
    //   .then(respuesta=> respuesta.json())
    //   .then(data=>{
    //     console.log(data)
    //     setUsers(data.respuesta.users)
    //     console.log(users)
    //     setLastUser(data.respuesta.users[data.respuesta.users.length-1])
    //     console.log(lastUser)
    //   })
    //   .catch(error=>console.error(error))  
    // }, [])

// let id = lastUser.id
// console.log(id)

//     useEffect(() => {
//         fetch('http://localhost:3030/api/users/1')
//         .then(respuesta=> respuesta.json())
//         .then(data=>{
//             console.log(data)
//             setDetalleLastUser(data.respuesta.user)
//             console.log(detalleLastUser)
//         })
//         .catch(error=>console.error(error))  
//       }, [])
  
// console.log(detalleLastUser.avatar)

    return(
        <div className="lu-user shadow">
            <div>
                <div className="title-wrapper">
                    <h4 className="title">Último Usuario Registrado</h4>
                </div>
                <div className="card-body">
                    <div className="lu-container-avatar">
                        <img className="lu-avatar" src={detalleLastUser.avatar} alt="avatar"/>
                    </div>
                    <div className="lu-data">
                        <h4>{detalleLastUser.user_name}</h4>
                    </div>
                    <div className="lu-data">
                        <h4>{detalleLastUser.email}</h4>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default LastUser;