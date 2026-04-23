import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({ setIsAuth }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);   // 🔥 IMPORTANT
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Welcome to Dashboard 🚀</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;