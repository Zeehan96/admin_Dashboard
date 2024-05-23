import React from "react";
import { Button, Box, Link } from "@mui/material";
import VerificationInput from "react-verification-input";

const VerifyPin = ({ pin, handlePinChange, handleSubmit, setCurrentState }) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* <VerificationInput
        length={6}
        value={pin}
        onChange={handlePinChange}
        passwordMode={true}
        autoComplete="on"
        inputProps={{
          style: {
            width: "2rem",
            height: "2rem",
            margin: "0 0.75rem",
            fontSize: "1.5rem",
            borderRadius: "4px",
            border: "1px solid gold",
            color: "white",
            backgroundColor: "black",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
          },
        }}
      /> */}
      <VerificationInput
        length={6}
        classNames={{
          container: "container",
          character: "character",
          characterInactive: "character--inactive",
          characterSelected: "character--selected",
          characterFilled: "character--filled",
        }}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 1,
          backgroundColor: "gold",
          color: "black",
          "&:hover": { backgroundColor: "darkgoldenrod" },
        }}
        onClick={handleSubmit}
      >
        Verify
      </Button>
    </Box>
  );
};

export default VerifyPin;
