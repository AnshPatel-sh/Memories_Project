import { styled } from "@mui/material/styles";
import { AppBar, Typography } from "@mui/material";

<<<<<<< HEAD
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
=======
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
>>>>>>> f1701dc7ad7792e37011c23eda43885af0503cb4
