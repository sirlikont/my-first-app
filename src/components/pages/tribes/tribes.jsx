
import React, { useEffect, useState }  from 'react';
import TribeTable from './tribetable';

import TitleComponent from './title';
import { Container } from 'react-bootstrap';


function TribesPage() {
    // const [userList, setUserList] = useState([]);

    // useEffect(() => {
    // const fetchData = async () => {
    //     try {
    //         let response = await fetch ('https:localhost3002/tribes');

    //         if(response.status === 200) {
    //             let data = await response.json();
    //             setUserList(data)
    //         } else {
    //             console.log('Failed to fech users');
    //             //set error here
    //         }
    //     } catch (error) {
    //         console.log('Failed to fech users');
    //         //set error here
    //     }
    // }
    // fetchData();
    // }, []);

    // useEffect(() =>{
    //     console.log(userList);
    // }, [userList])

      return (
        <Container>
            <div className='Container'>
                <div className="border bg-light">
                    <div>
                        <TitleComponent content="Tribes" />
                    </div>
                </div>
                <TribeTable/>
            </div>
    
        </Container>
    )
}

export default TribesPage;