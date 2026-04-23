import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    // 🔴 basic validation
    if (!data.name || !data.email || !data.password) {
      return alert("All fields are required");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/signup",
        data
      );

      console.log("SUCCESS:", res.data);

      alert("Registered successfully ✅");

      // 👉 redirect to login
      navigate("/");

    } catch (err) {
      console.log("ERROR:", err.response?.data);

      alert(
        err.response?.data?.message ||
        err.message ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      width: "320px",
      margin: "100px auto",
      padding: "25px",
      borderRadius: "12px",
      textAlign: "center",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      backgroundColor: "#fff"
    }}>
      <h2>Register</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        style={{ width: "100%", padding: "8px" }}
      />
      <br /><br />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        style={{ width: "100%", padding: "8px" }}
      />
      <br /><br />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        style={{ width: "100%", padding: "8px" }}
      />
      <br /><br />

      <button
        onClick={handleRegister}
        disabled={loading}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        {loading ? "Registering..." : "Register"}
      </button>

      <p style={{ marginTop: "15px" }}>
        Already have an account?{" "}
        <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;