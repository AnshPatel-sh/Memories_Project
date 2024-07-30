import { TextField, Button, Typography, Paper } from "@mui/material";
import {
  PaperStyled,
  ButtonSubmitStyled,
  FileInputStyled,
  // FormStyled,
  Root,
} from "./styles.js";

import FileBase from "react-file-base64";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/postSlice.js";

export function Form() {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log(`Form submitted${postData.title}`);
    e.preventDefault();
    console.log(`Code near dispatch`)
    dispatch(createPost(postData));
    console.log(`COde after dispatch`)
  };
  const clear = () => {};
  return (
    <>
      <PaperStyled>
        <Root>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a memory</Typography>
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
              onChange={(e) =>{
                return setPostData({ ...postData, message: e.target.value });
              }
              }
            />
            <TextField
              name="tags"
              variant="outlined"
              label="Tags (coma separated)"
              fullWidth
              value={postData.tags}
              onChange={(e) =>{

                return setPostData({ ...postData, tags: e.target.value.split(",") })
              }
              }
            />

            <FileInputStyled>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>{
                  return setPostData({ ...postData, selectedFile: base64 })
                }
                  
                }
              />
            </FileInputStyled>

            <ButtonSubmitStyled
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
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
