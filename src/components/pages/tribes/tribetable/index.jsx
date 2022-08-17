
import React, { useEffect, useState }  from 'react';
import TribeItem from './tribe-item/index.jsx';

export default function TribeTable() {
    // const [tribes, setTribes] = useState (
    //     [
    //         {
    //             id: 1,
    //             name: "Rigas"
    //         },
    //         {
    //             id: 2,
    //             name: "Billing"
    //         },
    //         {
    //             id: 3,
    //             name: "Internstellar"
    //         }
    //     ]
    // )
    const [tribes, setTribes]  = useState([]);
    // const [userList, setUserList] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
            let response = await fetch ('http://localhost:3002/tribes');

            if(response.status === 200) {
                let data = await response.json();
                setTribes(data)
            } else {
                console.log('Failed to fech users');
                //set error here
            }
        } catch (error) {
            console.log('Failed to fech users');
            //set error here
        }
    }
    fetchData();
    }, []);

    // useEffect(() =>{
    //     console.log(tribes);
    // }, [tribes])


    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Tribe name</th>
                </tr>
            </thead>
            <tbody>
                {
                    tribes.map((tribe) => <TribeItem key={tribe.id} tribe={tribe} /> )
                }
            </tbody>
         </table>
    )
}