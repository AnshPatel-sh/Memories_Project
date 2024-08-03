import React from 'react'
import { Form } from '../Forms/Form.js';
import {Posts} from "../Posts/Posts.js"
import { Grid,Container,Grow } from "@mui/material";

export function Home() {
  return (
    <>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </>
  );
}
