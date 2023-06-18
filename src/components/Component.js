import React, { useState } from "react";

const Component = (props) => {
    
    const [error, setError] = useState(false);
    
    errorGenerator = () => {
    throw new Error('Uncaught Exception');
  }

  return (
    <>
    {    
        error && <div>{somethingNotDefined}</div>
    }
    </>
  );
};

export default Component;
