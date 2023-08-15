import React, { useEffect , useState } from 'react';
import "./style.css";

const UseEffect = () => {

  
  const [myNum, setMyNum] = React.useState(0);
  
  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });

  return (
    <>
      <div className="centre_div">
        <p>{myNum}</p>

        <div className="button2"
          onClick={()=> setMyNum(myNum + 1)
        }>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Click ME
        </div>
      </div>
    </>
  );
};

export default UseEffect;