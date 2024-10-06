import React, { PureComponent, useState } from "react";

function State() {
  const [score, setScore] = useState(10); // States
  const [val, setVal] = useState({ name: "om", isBanned: false }); // Advanced States

  return (
    // <div>
    //   <h1>Score: {score}</h1>
    //   <button onClick={()=>setScore((prev)=>prev+1)} className="px-2 py-1 text-xs bg-blue-500 mt-2 rounded-full text-white">Click to change</button>
    // </div>

    <div>
      <h1>Name: {val.name}</h1>
      <h2>Banned: {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className="px-2 py-1 text-xs bg-blue-500 mt-2 rounded-full text-white"
      >
        Click to change
      </button>
    </div>
  );
}

export default State;
