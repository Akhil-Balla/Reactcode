import { Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Grid container display="flex" flexDirection="column">
      <Grid display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </Grid>

      <Grid>
        <Typography paragraph>Hi welcome to </Typography>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
