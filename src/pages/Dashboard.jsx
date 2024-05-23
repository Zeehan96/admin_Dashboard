import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GroupIcon from "@mui/icons-material/Group";
import PendingIcon from "@mui/icons-material/Pending";
import { Link } from "react-router-dom";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <CircularProgress sx={{ color: "goldenrod" }} />
      </Box>
    );
  }

  return (
    <div>
      <h1 style={{ color: "goldenrod" }}>Member's Dashboard</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#DAF7A6" }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <VerifiedUserIcon fontSize="large" />
                <Typography variant="h5" component="div">
                  Verified Members
                </Typography>
                <Typography variant="h5">44</Typography>
              </Box>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Link to={"/view-detail"}>
                <Button size="small">View Details</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#F88379	" }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <GroupIcon fontSize="large" />
                <Typography variant="h5" component="div">
                  Unverified Members
                </Typography>
                <Typography variant="h5">46</Typography>
              </Box>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Link to={"/view-detail"}>
                <Button size="small">View Details</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#e6be8a" }}>
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <PendingIcon fontSize="large" />
                <Typography variant="h5" component="div">
                  Pending Members
                </Typography>
                <Typography variant="h5">10</Typography>
              </Box>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Link to={"/view-detail"}>
                <Button size="small">View Details</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
