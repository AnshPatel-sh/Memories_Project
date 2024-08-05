import React from "react";
import { Button, CardContent, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  setCurrentId,
  deletePost,
  likePost,
} from "../../../features/postSlice.js";
import { useDispatch } from "react-redux";

import {
  MediaStyled,
  CardStyled,
  OverlayStyled,
  Overlay2Styled,
  DetailsStyled,
  TitleStyled,
  CardActionsStyled,
} from "./styles.js";

import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";

export function Post({ post }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const handleLike = async () => {
    await dispatch(likePost(post._id));
  };

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  // Debugging logs
  console.log("User:", user);
  console.log("Post creator:", post.creator);

  const canEditOrDelete =
    user?.result?._id === post.creator ||
    user?.result?.googleId === post.creator;


  console.log("Can Edit or Delete:", canEditOrDelete);

  return (
    <>
      <CardStyled>
        <MediaStyled
          image={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={post.title}
        />
        <OverlayStyled>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">{post.createdAt}</Typography>
        </OverlayStyled>

        {canEditOrDelete && (
          <Overlay2Styled>
            <Button
              style={{ color: "white" }}
              size="small"
              onClick={() => dispatch(setCurrentId(post._id))}
            >
              <MoreHorizIcon fontSize="default" />
            </Button>
          </Overlay2Styled>
        )}

        <DetailsStyled>
          <Typography variant="body2" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </DetailsStyled>
        <TitleStyled gutterBottom variant="h5" component="h2">
          {post.title}
        </TitleStyled>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
        <CardActionsStyled>
          <Button
            size="small"
            color="primary"
            onClick={handleLike}
            disabled={!user}
          >
            <Likes />
          </Button>
          {/* <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button> */}

          {canEditOrDelete && (
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon fontSize="small" /> Delete
            </Button>
          )}
        </CardActionsStyled>
      </CardStyled>
    </>
  );
}


