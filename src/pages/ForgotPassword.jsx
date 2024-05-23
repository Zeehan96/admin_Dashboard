import React from "react";
import { TextField, Button } from "@mui/material";

const ForgotPassword = ({ email, setEmail, errors, handleSubmit }) => {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
        sx={{
          "& label.Mui-focused": { color: "gold" },
          "& .MuiInput-underline:after": { borderBottomColor: "gold" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "gold" },
            "&:hover fieldset": { borderColor: "gold" },
            "&.Mui-focused fieldset": { borderColor: "gold" },
            "& input": { color: "white" },
          },
          "& .MuiInputLabel-root": { color: "white" },
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: "gold",
          color: "black",
          "&:hover": { backgroundColor: "darkgoldenrod" },
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default ForgotPassword;
