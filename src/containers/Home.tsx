import { Box, Button, Grid2, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box component="div">
      <Grid2 container spacing={2} justifyContent="space-between">
        <Grid2>
          <Typography variant="h5" component="h5">
            Total calories: <strong style={{ textDecoration: 'underline' }}>123</strong>
          </Typography>
        </Grid2>
        <Grid2>
          <NavLink to="/addNewMeal">
            <Button variant="outlined" color="inherit">
              Add new Meal
            </Button>
          </NavLink>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Home;
