import {useState, useEffect} from 'react';
import ContentRowTop from './ContentRowTop';


function MainContent() {
    // const [ users , setUsers] = useState([])
    // const [lastUser, setLastUser]= useState({})

    // useEffect(() => {
    //   fetch('http://localhost:3030/api/users')
    //   .then(respuesta=> respuesta.json())
    //   .then(data=>{
    //     setUsers(data.respuesta.users)
    //     setLastUser(data.respuesta.users[data.respuesta.users.length-1])
    //     //console.log(data.respuesta.users)
    //   })
    //   .catch(error=>console.error(error))  
    // }, [])

      
    return(
        <div className ='main-content'>

{/*             
            <ul>
            
                {
               
                 users.map((user, i)=>{
                    return(
                        <li key ={i}>
                            <h1>{user.user_name}</h1>
                            <p>{user.email}</p>
                        </li>

                    )


                })
   
                }

              </ul>
{

   <h1>Ultimo Usuario = {lastUser.user_name}</h1>

} */}

<ContentRowTop/>






        </div>

    )
   
   
   
   
}

export default MainContent;