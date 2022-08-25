import React from 'react';

function TribeItem({ tribe }) {
    return <tr><th scope="row">{tribe.id}</th><td colSpan="2">{tribe.name}</td></tr>
}



export default TribeItem;