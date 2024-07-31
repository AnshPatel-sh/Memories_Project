import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../features/postSlice.js";
import { useEffect, useState } from "react";
import { Post } from "./Post/Post.js";
import { Grid, CircularProgress, Typography } from "@mui/material";
import {
  ActionDivStyled,
  MainContainerStyled,
  SmMarginStyled,
} from "./styles.js";

export function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchPost());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const { posts } = useSelector((state) => {
    return state.postDataInRedux;
  });

  const [loading, setLoading] = useState(true);

  return (
    <>
      <MainContainerStyled>
        {/* CHANGE: Modified conditional rendering logic */}
        {loading ? (
          <CircularProgress />
        ) : posts.length === 0 ? (
          <Typography variant="h6">Please add a post</Typography>
        ) : (
          <Grid container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={6} md={6}>
                <SmMarginStyled>
                  <Post post={post} />
                </SmMarginStyled>
              </Grid>
            ))}
          </Grid>
        )}
        <ActionDivStyled>
          {/* You can add additional actions or buttons here */}
        </ActionDivStyled>
      </MainContainerStyled>
    </>
  );
}

{
  /* <MainContainerStyled> */
}
// {!posts.length ? (
//   <CircularProgress />
// ) : (
//   <Grid container alignItems="stretch" spacing={3}>
//     {posts.map((post) => (
//       <Grid key={post._id} item xs={12} sm={6} md={6}>
//         <SmMarginStyled>
//           <Post post={post} />
//         </SmMarginStyled>
//       </Grid>
//     ))}
//   </Grid>
// )}
// <ActionDivStyled>
//   {/* You can add additional actions or buttons here */}
// </ActionDivStyled>
// </MainContainerStyled>;
