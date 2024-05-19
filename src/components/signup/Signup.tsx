import { Button, Grid, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./signup.css";
const Signup = () => {
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
        <p>Create an account</p>
        <Button variant="contained" endIcon={<FacebookIcon />}>
          Sign-up with Facebook
        </Button>
        <p>- or -</p>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={2}
          mb={2}
        >
          <Grid item xs={12} sm={8}>
            <TextField label="Enter valid email" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              label="Create password"
              type="password"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              label="Confirm password"
              type="password"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Button className="Getstarted1" variant="contained">
          Get started
        </Button>
        <p>
          Already have an account? <a href="/">Log in</a>
        </p>
      </Grid>
    </Grid>
  );
};

export default Signup;
