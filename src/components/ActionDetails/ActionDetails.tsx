import React from 'react';

const ActionDetails = () => {
  return (
    <div>
      <h1 data-testid={"detail-id"}>Hello World</h1>
      <button data-testid={"detail-button-id"} onClick={() => {
        console.log("Clicked")
      }}>Click me!
      </button>
    </div>
  );
}

export default ActionDetails;
