import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const users = [
    { username: "akhil@gmail.com", password: "12345" },
    { username: "ramesh@gmail.com", password: "12345" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Grid container className="Maingrid" spacing={2}>
      <Grid item xs={6} className="LeftSide">
        <div className="LeftSideContent">
          <h1>Mastermind Better.</h1>
          <h1>Success Together.</h1>
          <p>
            Get meaningful results with essential tools for brainstorming, goal
            setting, and accountability.
          </p>
        </div>
      </Grid>

      <Grid item xs={6} className="RightSide">
        <h1>MASTERMIND MAESTRO</h1>
        <p>Sign in to your account</p>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={2}
            mb={2}
          >
            <Grid item xs={12} sm={8}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button className="Getstarted1" variant="contained" type="submit">
            Sign In
          </Button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </Grid>
    </Grid>
  );
};

export default Login;
