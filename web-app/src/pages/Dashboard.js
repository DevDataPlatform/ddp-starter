import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Box } from "@mui/material";
import Menu from "../common/Menu";

const Dashboard = () => {
  const [showComponent, setShowComponent] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/auth/profile`,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
        .then((res) => {
          setShowComponent(true);
        })
        .catch((err) => {
          localStorage.removeItem("token");
          navigate("/signin");
        });
    })();
  }, []);

  return (
    showComponent && (
      <Box>
        <Menu navItem="dashboard" />
        dashboard
      </Box>
    )
  );
};

export default Dashboard;
