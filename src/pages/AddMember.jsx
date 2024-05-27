import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, TextField, Grid } from "@mui/material";

export default function AddMember(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [member, setMember] = useState(location.state?.member || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/members");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 style={{ color: "goldenrod" }}>Add/Edit Member</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="userId"
              label="User ID"
              variant="outlined"
              fullWidth
              value={member.userId || ""}
              onChange={handleChange}
              style={{ marginBottom: "20px", borderColor: "gold" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="id"
              label="ID"
              variant="outlined"
              fullWidth
              value={member.id || ""}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              value={member.title || ""}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="body"
              label="Body"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={member.body || ""}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={2}
              value={member.description || ""}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginRight: "10px", backgroundColor: "#008000" }}
        >
          Save
        </Button>
        <Button
          style={{ backgroundColor: "#FF474D" }}
          variant="contained"
          color="secondary"
          onClick={() => navigate("/members")}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
}
