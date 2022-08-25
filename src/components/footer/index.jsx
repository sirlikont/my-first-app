import React from 'react';

function FooterComponent() {
    const today = new Date();

    return (
        <footer className="footer-expand-sm footer-dark bg-dark sticky-bottom">
        <div className="text-center text-muted bg-dark p-3">
        <p>Pipedrive &copy; {today.getFullYear()}</p> 
        </div>
        </footer>
    )
}

export default FooterComponent;