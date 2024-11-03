import './App';
import { Container, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home.tsx';
import AddNewMeal from './containers/AddNewMeal.tsx';

const App = () => {
  return (
    <>
      <Typography variant="h4" component="h4">
        Calories Counter
      </Typography>
      <hr />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addNewMeal" element={<AddNewMeal />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
