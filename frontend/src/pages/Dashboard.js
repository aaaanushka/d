import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px"
    }}>
      <h2>Welcome to Dashboard 🚀</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;