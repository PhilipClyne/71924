import React from "react";

function Content(props) {
  const { name1, age1 } = props;
  const arr = [
    { name: "Phi", age: 5 },
    { name: "Lê", age: 6 },
    { name: "Phi", age: 7 },
  ];
  const x = 5;
  return (
    <div>
      <div className="section">
        <h2>Content 1</h2>
        <p>Name: {name1}</p>
        <p>Age: {age1}</p>
        {arr &&
          arr.map((item, index) => {
            <p key={index}>{item.name}</p>;
          })}
          
      </div>
    </div>
  );
}

export default Content;
