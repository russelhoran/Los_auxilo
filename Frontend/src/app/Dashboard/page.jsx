"use client"
// pages/dashboard/page.jsx

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../Dashboard/Dashboard.module.css";

const DashboardPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    bigInput: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send form data to your API endpoint
    try {
      const response = await fetch("http://your-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Dashboard Page</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          margin="normal"
          required
          value={formData.username}
          onChange={handleChange}
          className={styles.TextField}
          sx={{display:"inline",width:"50px"}}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          required
          value={formData.password}
          onChange={handleChange}
          className={styles.TextField}
          sx={{display:"inline",width:"50px"}}
        />
        <TextField
          name="bigInput"
          label="Big Input"
          variant="outlined"
          margin="normal"
          required
          value={formData.bigInput}
          onChange={handleChange}
          className={styles.BigTextField}
          sx={{display: "inline",width:"50px",alignItems:"center"}}
          
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.btn}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default DashboardPage;
