
import React, { useEffect, useState }  from 'react';
import TribeTable from './tribetable';

import TitleComponent from './title';
import { Container } from 'react-bootstrap';


function TribesPage() {
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