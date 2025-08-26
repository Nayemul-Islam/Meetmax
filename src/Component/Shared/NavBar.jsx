import { CiSearch } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
const NavBar = () => {
  return (
    <div className="flex items-center justify-between mt-4 bg-white">
      {/* Left: User pic */}
      <div className="w-10 h-10 overflow-hidden rounded-xl">
        <img
          src="/src/assets/user.jpg"
          alt="User Face"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center: Search bar */}
      <div className="flex-1 mx-4">
        <div className="relative">
          {/* Search icon */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <CiSearch className="text-black-900 w-5 h-5" />
          </div>

          {/* Input box */}
          <input
            type="text"
            placeholder="Search for something here..."
            className="w-full border border-gray-300 rounded-full pl-10 pr-3 h-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Right: Message icon */}
      <div>
        <FaRegMessage className="w-8 h-8 text-black-200" />
      </div>
    </div>
  );
};

export default NavBar;
