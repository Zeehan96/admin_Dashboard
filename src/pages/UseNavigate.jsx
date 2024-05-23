import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

export default function UseNavigate() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  const OnHandleNavigate = () => {
    navigate("/aboutus");
  };
  return (
    <div>
      <Button
        color="success"
        variant="outlined"
        sx={{
          padding: "10px",
          width: "100px",
          color: "black",
          backgroundColor: "goldenrod",
          borderRadius: "50px",
          border: "1px solid goldenrod",
          boxShadow: "1px 1px 1px 1px  lightgray",
        }}
        onClick={() => {
          handleNavigate();
        }}
      >
        Navigate
      </Button>

      <Button
        color="success"
        variant="contained"
        sx={{
          padding: "10px",
          width: "100px",
          color: "black",
          backgroundColor: "goldenrod",
          borderRadius: "50px",
          border: "1px solid goldenrod",
          boxShadow: "1px 1px 1px 1px  lightgray",
        }}
        onClick={() => {
          OnHandleNavigate();
        }}
      >
        Navigate||
      </Button>

      <Typography>
        Hello There is a Button for Navigate to the home page with the help of
        use navigate hook
      </Typography>
    </div>
  );
}
