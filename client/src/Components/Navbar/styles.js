import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import { Typography, AppBar as MuiAppBar, Box } from "@mui/material";

// Main AppBar styling
export const AppBarStyled = styled(MuiAppBar)`
  border-radius: 15px;
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
`;

// Heading styling
export const HeadingStyled = styled(Typography)`
  color: rgba(0, 183, 255, 1);
  text-decoration: none;
`;

// Image styling
export const ImageStyled = styled("img")`
  margin-left: 15px;
`;

// Toolbar styling
export const ToolbarStyled = styled(Box)`
  display: flex;
  justify-content: flex-end;
  width: 400px;
`;

// Profile styling
export const ProfileStyled = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;

// UserName styling
export const UserNameStyled = styled(Typography)`
  display: flex;
  align-items: center;
`;

// BrandContainer styling
export const BrandContainerStyled = styled(Box)`
  display: flex;
  align-items: center;
`;

// Purple styling
export const PurpleStyled = styled(Box)(
  ({ theme }) => `
  color: ${theme.palette.getContrastText(deepPurple[500])};
  background-color: ${deepPurple[500]};
  border-radius: 50%;
`
);
