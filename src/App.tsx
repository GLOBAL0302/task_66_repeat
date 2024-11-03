import './App';
import { Container, Typography } from '@mui/material';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './containers/Home.tsx';
import AddNewMeal from './containers/AddNewMeal.tsx';

const App = () => {
  return (
    <>
      <Typography variant="h4" component="h4">
        <NavLink to="/">Calories Counter</NavLink>
      </Typography>
      <hr />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/addNewMeal' element={<AddNewMeal />}/>
          <Route path='/editMeal:id' element={<AddNewMeal/>}/>
        </Routes>
      </Container>
    </>
  );
};

export default App;
