import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CircularProgress,
  Box,
  TextField,
  TablePagination,
  Checkbox,
} from "@mui/material";
import TextEditor from "./TextEditor";

export default function Members() {
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [loadingNavigation, setLoadingNavigation] = useState(false);
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState({});
  const [selectedArray, setSelectedArray] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setLoadingData(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoadingData(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoadingData(false);
      });
  }, []);

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure you want to delete this member?")) {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      }
    }
  };

  const handleEdit = (member) => {
    setLoadingNavigation(true);
    setTimeout(() => {
      navigate("/add-member", { state: { member } });
      setLoadingNavigation(false);
    });
  };

  const handleAddMember = () => {
    setLoadingNavigation(true);
    setTimeout(() => {
      setLoadingNavigation(false);
      navigate("/add-member");
    }, 800);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setPage(0);
  };

  const handleCheckboxChange = (id) => {
    setChecked((previous_Check) => {
      const newChecked = { ...previous_Check, [id]: !previous_Check[id] };
      const newSelectedArray = Object.keys(newChecked)
        .filter((key) => newChecked[key])
        .map((key) => parseInt(key));
      setSelectedArray(newSelectedArray);
      return newChecked;
    });
  };

  const handleDeleteSelected = () => {
    if (window.confirm("Are you sure you want to delete selected Check Box?")) {
      const updatedData = data.filter(
        (item) => !selectedArray.includes(item.id)
      );
      setData(updatedData);
      setSelectedArray([]);
      setChecked({});
    }
  };

  const normalizeText = (text) => {
    return text.toLowerCase().replace(/\s+/g, " ").trim();
  };

  const filteredData = data.filter((item) => {
    const searchText = normalizeText(search);
    const userId = normalizeText(item.userId.toString());
    const title = normalizeText(item.title);
    const body = normalizeText(item.body);

    return (
      userId.includes(searchText) ||
      title.includes(searchText) ||
      body.includes(searchText)
    );
  });

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <TextField
          label="Search Members"
          variant="outlined"
          value={search}
          onChange={handleSearch}
        />
        <Button
          style={{ backgroundColor: "#50C878" }}
          variant="contained"
          color="success"
          onClick={handleAddMember}
        >
          Add A Member +
        </Button>
      </div>
      {loadingData ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <table className="table table-hover">
            <thead className="head-dark">
              <tr>
                <td></td>
                <td>Sr. No</td>
                <td>User ID</td>
                <td>Title</td>
                <td>Body</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    <Checkbox
                      style={{ color: "#50C87" }}
                      checked={checked[item.id] || false}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>
                  <td>{index + 1 + page * rowsPerPage}</td>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <Button
                        style={{
                          backgroundColor: "gold",
                          marginRight: "10px",
                        }}
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        style={{ backgroundColor: "red" }}
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Button
              style={{ backgroundColor: "red" }}
              variant="contained"
              color="error"
              onClick={handleDeleteSelected}
              disabled={selectedArray.length === 0}
            >
              Delete Selected Data
            </Button>
          </div>
          <TextEditor />
        </>
      )}
    </div>
  );
}
