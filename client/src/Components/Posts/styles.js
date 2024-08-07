import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const MainContainerStyled = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const SmMarginStyled = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const ActionDivStyled = styled("div")({
  textAlign: "center",
});


