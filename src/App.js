import React, { useState } from 'react';

const App=() =>{
  let time=new Date().toLocaleTimeString();
  const[ctime, setctime]=useState(time);

  const updateTime = () => {
    time=new Date().toLocaleTimeString();
    setctime(time);

  };
  setInterval(updateTime,1000)
  return (
    <> 
      <h1> {ctime} </h1>
      
    </>
  );
};
export default App;


