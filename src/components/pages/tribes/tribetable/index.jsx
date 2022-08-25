
// import React, { useEffect, useState }  from 'react';
// import TribeItem from './tribe-item/index.jsx';
// import ClipLoader from "react-spinners/ClipLoader";

// export default function TribeTable() {
//     // const [tribes, setTribes] = useState (
//     //     [
//     //         {
//     //             id: 1,
//     //             name: "Rigas"
//     //         },
//     //         {
//     //             id: 2,
//     //             name: "Billing"
//     //         },
//     //         {
//     //             id: 3,
//     //             name: "Internstellar"
//     //         }
//     //     ]
//     // )
//     const [tribes, setTribes]  = useState([]);
//     // const [userList, setUserList] = useState([]);

//     const [loading, setLoading] = useState(false);
//     const  [failing, setFailing] = useState(false);

//     useEffect(() => {
//     const fetchData = async () => {
//         try {
//             setLoading(true)
//             let response = await fetch ('http://localhost:3002/tribes');
//             setLoading(false)
//             if(response.status === 200) {
//                 let data = await response.json();
//                 setTribes(data)
//             } else {
//                 console.log('Failed to fech users');
//                 //set error here
//             }
//         } catch (error) {
//             setLoading(false);
//             setFailing(true);
//             console.log('Failed to fech users');
//             //set error here
//         }
//     }
//     fetchData();
//     }, []);

//     // useEffect(() =>{
//     //     console.log(tribes);
//     // }, [tribes])


//     return (
//         <div className='contaner'>
//         { failing && <p>Something went wrong</p>}
//         { loading ? (
//             <div className="loader-container">
//                 <ClipLoader color={'#26AD14'} loading={loading} size={100} />
//             </div>
//             ) : (
//             <table className='table'>
//                  <thead>
//                     <tr>
//                         <th scope="col"></th>
//                         <th scope="col">Tribe name</th>
//                      </tr>
//                  </thead>
//                  <tbody>
//                      {
//                         tribes.map((tribe) => <TribeItem key={tribe.id} tribe={tribe} /> )
//                     }
//                 </tbody>
//             </table>
//             )}
//         </div>

//         // <table className='table'>
//         //     <thead>
//         //         <tr>
//         //             <th scope="col"></th>
//         //             <th scope="col">Tribe name</th>
//         //         </tr>
//         //     </thead>
//         //     <tbody>
//         //         {
//         //             tribes.map((tribe) => <TribeItem key={tribe.id} tribe={tribe} /> )
//         //         }
//         //     </tbody>
//         //  </table>
//     )
// }



