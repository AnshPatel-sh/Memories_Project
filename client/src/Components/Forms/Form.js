import { TextField, Typography } from "@mui/material";
import {
  PaperStyled,
  ButtonSubmitStyled,
  FileInputStyled,
  Root,
} from "./styles.js";

import FileBase from "react-file-base64";
import { setCurrentId } from "../../features/postSlice.js";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../features/postSlice.js";
import { useEffect } from "react";

export function Form() {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const currentId = useSelector((state) => {
    return state.postDataInRedux.currentId;
  });

  const post = useSelector((state) =>
    currentId
      ? state.postDataInRedux.posts.find((p) => {
          return p._id === currentId;
        })
      : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    dispatch(setCurrentId(null));
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost({ id: currentId, updatedPost: postData }));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  };
  return (
    <>
      <PaperStyled>
        <Root>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant="h6">
              {currentId ? "Editing" : "Creating"} a Memory
            </Typography>
            <TextField
              name="creator"
              variant="outlined"
              label="Creator"
              fullWidth
              value={postData.creator}
              onChange={(e) => {
                return setPostData({ ...postData, creator: e.target.value });
              }}
            ></TextField>

            <TextField
              name="title"
              variant="outlined"
              label="Title"
              fullWidth
              value={postData.title}
              onChange={(e) => {
                return setPostData({ ...postData, title: e.target.value });
              }}
            />
            <TextField
              name="message"
              variant="outlined"
              label="Message"
              fullWidth
              multiline
              rows={4}
              value={postData.message}
              onChange={(e) => {
                return setPostData({ ...postData, message: e.target.value });
              }}
            />
            <TextField
              name="tags"
              variant="outlined"
              label="Tags (coma separated)"
              fullWidth
              value={postData.tags}
              onChange={(e) => {
                setPostData({
                  ...postData,
                  tags: e.target.value.split(","),
                });
              }}
            />

            <FileInputStyled>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => {
                  return setPostData({ ...postData, selectedFile: base64 });
                }}
              />
            </FileInputStyled>

            <ButtonSubmitStyled
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              {currentId ? "Update" : "Submit"}
            </ButtonSubmitStyled>
            <ButtonSubmitStyled
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth
            >
              Clear
            </ButtonSubmitStyled>
          </form>
        </Root>
      </PaperStyled>
    </>
  );
}
