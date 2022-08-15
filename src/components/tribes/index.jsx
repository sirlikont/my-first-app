import React, { useState }  from 'react';
import TribeItem from './tribe-item/index.jsx';

export default function TribeTable() {
    const [tribes, setTribes] = useState (
        [
            {
                id: 1,
                name: "Rigas"
            },
            {
                id: 2,
                name: "Billing"
            },
            {
                id: 3,
                name: "Internstellar"
            }
        ]
    )

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