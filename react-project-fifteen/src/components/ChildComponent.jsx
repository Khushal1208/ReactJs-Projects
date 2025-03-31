import React from 'react';

const ChildComponent = React.memo(({ handelClick, buttonName }) => {
  console.log("Child component re-rendered again");

  return (
    <div>
      <button onClick={handelClick}>
        {buttonName}
      </button>
    </div>
  );
});

export default ChildComponent;


//  agar aap React.memo me wrap kar dete  hai component ko to component re-render tabhi hoga jab props honge nhi to re-render nhi hoga.
// If u r sending a function , then react.memo wont be able to save you form re-rendering.