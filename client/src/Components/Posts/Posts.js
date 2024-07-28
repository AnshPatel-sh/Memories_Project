import { Post } from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../features/postSlice.js";

export function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.post;
  });

  //  useEffect(() => {
  //    dispatch(fetchPost());
  //  }, [dispatch]);

  console.log(posts);
  return (
    <>
      <h1>Posts Function</h1>
      <Post />
      <Post />
    </>
  );
}
