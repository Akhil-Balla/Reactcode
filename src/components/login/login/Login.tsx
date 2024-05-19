import { Button, Grid, TextField } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import "./login.css"

const Login = () => {
  return (
    <Grid container className="Maingrid" spacing={2}>
      <Grid xs={6} className="Secondgrid">
        <Grid className="Headings1">


          <h1>Mastermind Better.</h1>
          <h1>Success Together.</h1>

        </Grid>
        <Grid className="Para1">

          <p>Get meaningful results with essential tools for brainstorming goal setting and accountability </p>

        </Grid>
      </Grid>
      <Grid className="Thirdgrid" xs={6}>
        <Grid className="Innergrid">
          <h1 className="Mastermind1">MASTERMIND MAESTRO</h1>
          <p className="Account">Create an account</p>
        </Grid>
        <Grid>
          <Button variant="contained" endIcon={<FacebookIcon />}>
            Sign-up with facebook
          </Button>
        </Grid>
        <Grid >
          <p>- or -</p>
          <Grid className="Textfields">
            <TextField

              id="standard-multiline-flexible"
              label="Enter valid email"
              variant="standard"

            />
            <br></br>
            <TextField
              id="standard-multiline-flexible"
              label="Create password"
              maxRows={6}
              variant="standard"
            />
            <br></br>
            <TextField
              id="standard-multiline-flexible"
              label="Confirm password"
              maxRows={6}
              variant="standard"
            />
          </Grid>
          <br></br>
          <Grid className="Getstarted" >
            <Button className="Getstarted1" variant="contained" >
              Get started
            </Button>
          </Grid>
          <br></br>
          <p>Already have an account? </p> <a href="https://www.w3schools.com/tags/att_a_href.asp">Log in</a>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login
