import React from "react";
import { TextField, Button } from "@mui/material";

const ConfirmPassword = ({
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
  errors,
  handleSubmit,
}) => {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!errors.password}
        helperText={errors.password}
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
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        autoComplete="new-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword}
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
        Confirm Password
      </Button>
    </>
  );
};

export default ConfirmPassword;
