import { Button, Grid, TextField } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./signup.css";
import { Margin } from "@mui/icons-material";
const Signup = () => {
  return (
    <Grid container className="Maingrid" spacing={2}>
      <Grid className="Innergrid">
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
          <h1 className="Mastermindh1">MASTERMIND MAESTRO</h1>
          <p>Create an account</p>
          <Button variant="contained" endIcon={<FacebookIcon />}>
            Sign-up with Facebook
          </Button>
          <p className="Ortag1" >- or -</p>
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={2}
            mb={2}
          >
            <Grid item xs={12} sm={8}>
              <TextField
                label="Enter valid email*"
                id="outlined-size-small"
                size="small"
              />          </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                label="Create new password*"
                id="outlined-size-small"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                label="Confirm new password*"
                id="outlined-size-small"
                size="small"
              />
            </Grid>
          </Grid>
          <Button className="Getstarted1" variant="contained">
            Sign up
          </Button>
          <p className="signup12">
            Already have an account? <a href="/">Log in</a>
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
