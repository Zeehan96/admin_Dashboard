import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  TextField,
  Button,
  Box,
  Alert,
  Link,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import VerifyPin from "../pages/VerifyPin";
import ConfirmPassword from "../pages/ConfirmPassword";
import logo from "../assets/images/logo.png";
import "../assets/style/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pin, setPin] = useState(Array(6).fill(""));
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (currentState === 0) {
      if (!email) tempErrors.email = "Email is required";
      if (!password) tempErrors.password = "Password is required";
    } else if (currentState === 1) {
      if (!email) tempErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(email))
        tempErrors.email = "Email is invalid";
    } else if (currentState === 3) {
      if (!password) tempErrors.password = "Password is required";
      if (!confirmPassword)
        tempErrors.confirmPassword = "Confirm Password is required";
      if (password !== confirmPassword)
        tempErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      setLoading(true);
      if (currentState === 0) {
        console.log("Email:", email, "Password:", password);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        navigate("/dashboard");
      } else if (currentState === 1) {
        setSubmitted(true);
        console.log("Forgot Password Email:", email);
        setCurrentState(2);
      } else if (currentState === 2) {
        if (pin.length === 6) {
          console.log("Verification Pin:", pin);
          setCurrentState(3);
        }
      } else if (currentState === 3) {
        console.log("New Password:", password);
        setSubmitted(true);
      }
      setLoading(false);
    }
  };

  const handlePinChange = (value) => {
    setPin(value);
  };

  return (
    <Container fluid className="login-container">
      <Row className="vh-100">
        <Col
          md={6}
          className="d-flex align-items-start justify-content-start p-4"
        >
          <div className="login-logo">
            <img src={logo} alt="Logo" />
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          {submitted && currentState === 1 && (
            <Alert severity="info" className="mb-4">
              Verification pin sent to your email! Please check your inbox.
            </Alert>
          )}
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
            className="w-75"
          >
            {currentState === 0 && (
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
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "gold",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "gold" },
                      "&:hover fieldset": { borderColor: "gold" },
                      "&.Mui-focused fieldset": { borderColor: "gold" },
                      "& input": { color: "white" },
                    },
                    "& .MuiInputLabel-root": { color: "white" },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!errors.password}
                    helperText={errors.password}
                    sx={{
                      "& label.Mui-focused": { color: "gold" },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "gold",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "gold" },
                        "&:hover fieldset": { borderColor: "gold" },
                        "&.Mui-focused fieldset": { borderColor: "gold" },
                        "& input": { color: "white" },
                      },
                      "& .MuiInputLabel-root": { color: "white" },
                    }}
                  />
                </Box>
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <Link
                    href="#forgot-password"
                    onClick={() => setCurrentState(1)}
                    sx={{ color: "gold", textDecoration: "none" }}
                  >
                    Forgot Password?
                  </Link>
                </div>

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
                  disabled={loading} // Disable button while loading
                >
                  {loading ? <CircularProgress size={24} /> : "Sign In"}
                </Button>
              </>
            )}
            {currentState === 1 && (
              <ForgotPassword
                email={email} // Pass email state as prop
                setEmail={setEmail}
                errors={errors}
                handleSubmit={handleSubmit}
              />
            )}
            {currentState === 2 && (
              <VerifyPin
                pin={pin}
                handlePinChange={handlePinChange}
                handleSubmit={handleSubmit}
              />
            )}
            {currentState === 3 && (
              <ConfirmPassword
                password={password}
                confirmPassword={confirmPassword}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                errors={errors}
                handleSubmit={handleSubmit}
              />
            )}
            {currentState !== 0 && (
              <div className="back-to-login-link">
                <Button
                  variant="text"
                  sx={{ color: "gold" }}
                  onClick={() => setCurrentState(0)}
                >
                  Back to Login
                </Button>
              </div>
            )}
          </Box>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginPage;
