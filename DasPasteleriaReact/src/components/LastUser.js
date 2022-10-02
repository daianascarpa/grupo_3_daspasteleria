import React from 'react';
import {useState, useEffect} from 'react';
//import imagenFondo from '../assets/img/DAS_logo.png';

function LastUser(){
     const [users , setUsers] = useState([])
     const [lastUser, setLastUser]= useState({})
     const [detalleLastUser, setDetalleLastUser] = useState([])

    useEffect(() => {
      fetch('http://localhost:3030/api/users')
      .then(respuesta=> respuesta.json())
      .then(data=>{
        console.log(data)
        setUsers(data.respuesta.users)
        console.log(users)
        setLastUser(data.respuesta.users[data.respuesta.users.length-1])
        console.log(lastUser)
      })
      .catch(error=>console.error(error))  
    }, [])

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
                    {/* <div className="lu-container-avatar">
                        <img className="lu-avatar" src={detalleLastUser.avatar} alt="avatar"/>
                    </div> */}
                    <div className="lu-data">
                        <h4>{lastUser.user_name}</h4>
                    </div>
                    <div className="lu-data">
                        <h4>{lastUser.email}</h4>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default LastUser;