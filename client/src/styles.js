import { styled } from "@mui/material/styles";
import { AppBar, Typography } from "@mui/material";

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

export const HeadingStyled = styled(Typography)({
  color: "rgba(0,183,255, 1)",
});

export const ImageStyled = styled("img")({
  marginLeft: "15px",
});





// import { makeStyles } from "@material-ui/core/styles";
// import { makeStyles } from "@mui/styles";

// export default makeStyles(() => ({
//   appBar: {
//     borderRadius: 15,
//     margin: "30px 0",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   heading: {
//     color: "rgba(0,183,255, 1)",
//   },
//   image: {
//     marginLeft: "15px",
//   },
// }));