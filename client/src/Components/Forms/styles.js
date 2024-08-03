import { styled } from "@mui/material/styles";
import { Paper, TextField, Button } from "@mui/material";

export const Root = styled("div")(({ theme }) => ({
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
  },
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const FormStyled = styled("form")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const FileInputStyled = styled("div")({
  width: "97%",
  margin: "10px 0",
});

export const ButtonSubmitStyled = styled(Button)(({ theme }) => ({
  marginBottom: 10,
}));
