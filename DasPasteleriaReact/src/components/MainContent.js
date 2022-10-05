import ContentRowTop from './ContentRowTop';
import ContentRowCenter from './ContentRowCenter';
import ContentTable from './ContentTable';


function MainContent() {
       return(
        <div className ='main-content'>

            
            {/* <ul>
            
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

              </ul> */}
{/* {

   <h1>Ultimo Usuario = {lastUser.user_name}</h1>

} */}

<ContentRowTop/>
<ContentRowCenter/>
<ContentTable/>


        </div>

    )
   
   
   
   
}

export default MainContent;