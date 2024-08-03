import { styled } from "@mui/material/styles";
import { AppBar, Typography } from "@mui/material";

export const AppBarStyled = styled(AppBar)(
  ({ theme }) => `
  border-radius: 15px;
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
);

export const HeadingStyled = styled(Typography)`
  color: rgba(0, 183, 255, 1);
`;

export const ImageStyled = styled("img")`
  margin-left: 15px;
`;
