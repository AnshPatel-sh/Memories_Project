import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../features/postSlice.js";
import { useEffect } from "react";
import { Post } from "./Post/Post.js";
import { Grid,CircularProgress } from "@mui/material";
import {ActionDivStyled,MainContainerStyled,SmMarginStyled} from "./styles.js"

export function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  const { posts } = useSelector((state) => {
    return state.postDataInRedux;
  });

  // console.log(`Post data logged in Posts.js`);
  // console.log(posts);

  return (
    <>
      <MainContainerStyled>
        {!posts.length ? (
          <CircularProgress />
        ) : (
          <Grid container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={6} md={6}>
                <SmMarginStyled>
                  <Post post={post}  />
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
