import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      price: "1000",
      instock: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661538615607-bb324bf28ba4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      name: "Daily Objects",
      price: "2000",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
      name: "Apple",
      price: "3000",
      instock: true,
    },
  ];
  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100 rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300 ">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">{elem.price}</p>
            <button
              className={`px-4 py-1 ${
                elem.instock ? "bg-blue-600" : "bg-red-600"
              } text-xs rounded-full text-zinc-100 mt-3`}
            >
              {elem.instock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
