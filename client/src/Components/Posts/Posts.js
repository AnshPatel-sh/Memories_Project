import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../features/postSlice.js";
import { useEffect } from "react";



export function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  

  const {posts}= useSelector((state) => {
    return state.postDataInRedux;
  });

  console.log(`Post data logged in Posts.js`);
  console.log(posts);

  return (
    <>
      <h1>Posts component</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </>
  );
}
