import React from 'react';

function TitleComponent({
    content
}) {
    return (
    <div className=" flex-parent text-start p-3">
      <h2>{content}</h2>
    </div>
    )
}

export default TitleComponent;