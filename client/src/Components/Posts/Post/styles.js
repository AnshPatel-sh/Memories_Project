// import { styled } from "@mui/material/styles";
// import { Card, CardMedia, CardActions, Box, Typography } from "@mui/material";

// export const MediaStyled = styled(CardMedia)({
//   height: 0,
//   paddingTop: "56.25%",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   backgroundBlendMode: "darken",
// });

// export const BorderStyled = styled("div")({
//   border: "solid",
// });

// export const FullHeightCardStyled = styled(Card)({
//   height: "100%",
// });

// export const CardStyled = styled(Card)({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
//   borderRadius: "15px",
//   height: "100%",
//   position: "relative",
// });

// export const OverlayStyled = styled("div")({
//   position: "absolute",
//   top: "20px",
//   left: "20px",
//   color: "white",
// });

// export const Overlay2Styled = styled("div")({
//   position: "absolute",
//   top: "20px",
//   right: "20px",
//   color: "white",
// });

// export const GridStyled = styled(Box)({
//   display: "flex",
// });

// export const DetailsStyled = styled(Box)({
//   display: "flex",
//   justifyContent: "space-between",
//   margin: "20px",
// });

// export const TitleStyled = styled(Typography)({
//   padding: "0 16px",
// });

// export const CardActionsStyled = styled(CardActions)({
//   padding: "0 16px 8px 16px",
//   display: "flex",
//   justifyContent: "space-between",
// });


import { styled } from "@mui/material/styles";
import { Card, CardMedia, CardActions, Box, Typography } from "@mui/material";

export const MediaStyled = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%", // 16:9 aspect ratio
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
});

export const CardStyled = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
});

export const OverlayStyled = styled("div")({
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "white",
});

export const Overlay2Styled = styled("div")({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "white",
});

export const DetailsStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
});

export const TitleStyled = styled(Typography)({
  padding: "0 16px",
});

export const CardActionsStyled = styled(CardActions)({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
});