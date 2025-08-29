import React from "react";
import { GiSelfLove } from "react-icons/gi";
import { FaRegComment, FaShare } from "react-icons/fa";
import { AiOutlineFileGif } from "react-icons/ai";
import { TbPhoto } from "react-icons/tb";
import { RiUserSmileLine } from "react-icons/ri";
const PostCard = ({ post }) => {
  return (
    <div className="bg-base-100 rounded-2xl shadow-sm p-3 sm:p-4 mb-3 sm:mb-4">
     
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover"
          />
          <div className="min-w-0">
            <h4 className="font-semibold text-sm sm:text-base truncate">
              {post.author.name}
            </h4>
            <p className="text-[11px] sm:text-xs text-base-content/60 truncate">
              {post.time} · {post.visibility}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-xs sm:btn-sm px-2">•••</button>
      </div>


      {/* Image */}
      <div className="mt-2 sm:mt-3">
        <img
          src={post.contentImage}
          alt="post"
          className="rounded-xl w-full aspect-[4/3] object-cover"
          loading="lazy"
        />
      </div>


      {/* Stats */}
      <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-base-content/70 mt-2">
        <span>{post.likes} Likes</span>
        <span>
          {post.comments} Comments · {post.shares} Shares
        </span>
      </div>


      {/* Actions */}
      <div className="mt-2 border-t border-base-200 pt-2 grid grid-cols-3 gap-2 sm:flex sm:justify-between">
        <div className="flex items-center">
          <GiSelfLove />
          <button className="btn btn-ghost">Like</button>
        </div>
        <div className="flex items-center">
          <FaRegComment />
          <button className="btn btn-ghost ">Comments</button>
        </div>
        <div className="flex items-center">
          <FaShare />
          <button className="btn btn-ghost">Share</button>
        </div>
      </div>


      {/* Comment input */}
      <div className="mt-2 flex items-center gap-2">
        <img
          src={"/image/user.jpg"}
          alt="me"
          className="w-8 h-8 object-cover rounded-full"
        />
        <label className="input input-bordered input-sm rounded-xl flex items-center gap-2 grow">
          <input
            type="text"
            className="grow"
            placeholder="Write a comment..."
          />


          {/* action icons (placeholders) */}
          <div className="flex justify-between gap-3">
            <AiOutlineFileGif />
            <TbPhoto />
            <RiUserSmileLine />
          </div>
        </label>
        <button className="btn bg-blue-100 text-blue-400 rounded-l">➤</button>
      </div>
    </div>
  );
};

export default PostCard;
