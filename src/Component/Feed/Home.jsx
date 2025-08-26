import CreatePost from "./CreatePost";
import NavBar from "../Shared/NavBar";
import Stories from "./Stories";
import LowerNavBar from "../Shared/LowerNavBar";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/public/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <NavBar> </NavBar>
      <Stories />
      <CreatePost />

      <div className="pt-2">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>

      <LowerNavBar></LowerNavBar>
    </>
  );
};

export default Home;
