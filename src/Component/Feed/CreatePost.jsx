import { GoDeviceCameraVideo } from "react-icons/go";
import { TbPhoto } from "react-icons/tb";
import { RiUserSmileLine } from "react-icons/ri";
const CreatePost = () => {
  return (
    <div className="mt-2 shadow-xs bg-gray-10">
      <div className="flex items-center gap-2">
        <img
          src="/src/assets/user.jpg"
          alt="user"
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="What's happening?"
          className="input input-bordered rounded-xl w-full"

        />
      </div>

      <div className="flex justify-between mt-2 ml-1">
        <div className="flex justify-between w-[70%]">
          <div className="flex items-center gap-1">
            <GoDeviceCameraVideo />
            <p>Live</p>
          </div>

          <div className="flex items-center gap-1">
            <TbPhoto />
            <p>Photo</p>
          </div>

          <div className="flex items-center gap-1">
            <RiUserSmileLine />
            <p>Feeling</p>
          </div>
        </div>
        <button className="btn bg-blue-500 rounded-xl text-white">Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
