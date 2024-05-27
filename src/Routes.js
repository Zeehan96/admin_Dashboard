import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts";
import HomePage from "./pages/HomePage";
import RecipeReviewCard from "./pages/AboutUs";
import UseNavigate from "./pages/UseNavigate";
import Dashboard from "./pages/Dashboard";
import Programs from "./pages/Programs";
import Members from "./pages/Members";
import LoginPage from "./pages/LoginPage";
import LoginPageContent from "./pages/LoginPageContent";
import ForgotPassword from "./pages/ForgotPassword";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple, orange } from "@mui/material/colors";

import VerifyPin from "./pages/VerifyPin";
import PasswordConfirmation from "./pages/ConfirmPassword";
import AddMember from "./pages/AddMember";
import ViewDetail from "./pages/ViewDetail";
import PageNotFound from "./pages/PageNotFound";
import Test from "./pages/Test";
export default function RoutesComponent() {
  const theme = createTheme({
    status: {
      color: purple[500],
    },
  });

  return (
    <ThemeProvider theme={createTheme}>
      <Routes>
        {/* <Route path="/loginpage" element={<LoginPageContent />}></Route> */}
        {/* <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      <Route path="/verifypin" element={<VerifyPin />}></Route>
      <Route path="/passwordconfirm" element={<PasswordConfirmation />}></Route> */}
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/test" element={<Test />}></Route>


        <Route path="/" element={<DashboardLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/add-member" element={<AddMember />} />

          <Route path="/view-detail" element={<ViewDetail />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  );
}
