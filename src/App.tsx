import './App';
import { Container, Typography } from '@mui/material';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './containers/Home.tsx';
import EditMeal from './containers/EditMeal.tsx';
import AddMealForm from './components/AddMealForm/AddMealForm.tsx';

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
          <Route path="/addNewMeal" element={<AddMealForm />} />
          <Route path="/editMeal/:id" element={<EditMeal />} />
          <Route path="*" element={<h2>Not Found Dear</h2>} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
