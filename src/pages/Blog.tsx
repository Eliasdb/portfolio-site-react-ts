import axios from "axios";
import { useEffect, useState } from "react";
// import Post from "../components/Post";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const url = "https://mern-blog-h7oi.onrender.com/api/post";

  const fetchData = async () => {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p>Under construction...</p>
    </>
    // <section className="blog custom-height-skills p-4 w-[1000px] mx-auto">
    //   <div className="blog-title mb-16 pb-8 mt-20">
    //     <p className="text-4xl font-bold inline border-b-4 border-[#A5ABBD] dark:text-gray-200 ">
    //       Blog posts
    //     </p>
    //   </div>

    //   <div className="blog-posts grid md:grid-cols-4 gap-4 justify-center">
    //     {posts.length > 0 &&
    //       posts.map((post, id) => {
    //         return <Post {...post} key={id} />;
    //       })}
    //   </div>
    // </section>
  );
};
export default Blog;
