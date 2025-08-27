import React, { useEffect, useState } from "react";

const Stories = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then(setFriends)
      .catch(console.log);
  }, []);

  return (
    <div className="flex gap-3 pt-3 -ml-3 mt-2 pr-2 md:justify-between overflow-hidden">
      {/* User story */}
      <div className="relative flex flex-col items-center w-16 flex-shrink-0">
        <div className="w-10 h-10 rounded-full ring-2 ring-blue-500 overflow-hidden">
          <img
            src="/src/assets/user.jpg"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <span
          className="absolute bottom-3.5 left-1/2 -translate-x-1/2 
                         bg-white w-5 h-5 rounded-full flex items-center justify-center text-sm font-bold"
        >
          +
        </span>
        <span className="text-xs mt-1">Saleh</span>
      </div>

      {/* Friends stories */}
      {friends.map((f) => (
        <div
          key={f.id}
          className="flex flex-col items-center w-10 flex-shrink-0"
        >
          <div className="relative w-10 h-10 rounded-full ring-2 ring-blue-500  overflow-hidden">
            <img
              src={f.img}
              alt={f.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <span className="text-xs mt-1 truncate max-w-12 md:max-w-fit">
            {f.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
