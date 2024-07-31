import React from "react";
import { Button, CardContent, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { setCurrentId,deletePost } from "../../../features/postSlice.js";
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

export function Post({ post }) {
  const dispatch = useDispatch();
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
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{post.createdAt}</Typography>
        </OverlayStyled>
        <Overlay2Styled>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => dispatch(setCurrentId(post._id))}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </Overlay2Styled>
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
            // onClick={() => dispatch(likePost(post._id))}
          >
            <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </CardActionsStyled>
      </CardStyled>
    </>
  );
}
