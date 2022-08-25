
// import React, { useEffect, useState }  from 'react';
// import TribeTable from './tribetable';
// import Tribes from './tribetable.index.jsx';

// import TitleComponent from './title';
// import { Container } from 'react-bootstrap';


// function TribesPage() {
//     // const [userList, setUserList] = useState([]);

//     // useEffect(() => {
//     // const fetchData = async () => {
//     //     try {
//     //         let response = await fetch ('https:localhost3002/tribes');

//     //         if(response.status === 200) {
//     //             let data = await response.json();
//     //             setUserList(data)
//     //         } else {
//     //             console.log('Failed to fech users');
//     //             //set error here
//     //         }
//     //     } catch (error) {
//     //         console.log('Failed to fech users');
//     //         //set error here
//     //     }
//     // }
//     // fetchData();
//     // }, []);

//     // useEffect(() =>{
//     //     console.log(userList);
//     // }, [userList])

//       return (
//         <Container>
//             <div className='Container'>
//                 <div className="border bg-light">
//                     <div>
//                         <TitleComponent content="Tribes" />
//                     </div>
//                 </div>
//                 <TribeTable/>
//             </div>
    
//         </Container>
//     )
// }

// export default TribesPage;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../store/actions/users'

import TitleComponent from './title';
import { Container } from 'react-bootstrap';

function Tribes() {
  const usersList = useSelector((store) => store.users.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
        <Container>
            <div className='Container'>
               <div className="border bg-light">
                   <div>
                        <TitleComponent content="Tribes" />
                    </div>
              </div>
                    <table className='table'>
                        <thead>
                             <tr>
                                 {/* <th scope="col"></th> */}
                                <th scope="col">Tribe name</th>
                             </tr>
                        </thead>
                        <tbody>
                            <div>
                          
                                     { usersList.map((user) => { return <div key={user.id}>{user.name}</div> })}
                               
                            </div> 
                        </tbody>
                    </table>
                
            </div>
        </Container>
    </>
  )
}

export default Tribes; 