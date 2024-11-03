import { Box, Button, Grid2, TextField, Typography } from '@mui/material';
import { MealTimes } from '../../CONSTANTS.ts';
import React, { useState } from 'react';
import { MealMutationState } from '../../types.ts';
import { axiosApi } from '../../axiosApi.ts';
import { useNavigate } from 'react-router-dom';

const initialState = {
  mealTime: '',
  mealDescription: '',
  mealCalories: 0,
};

const AddMealForm = () => {
  const [mealMutation, setMealMutation] = useState<MealMutationState>(initialState);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMealMutation((prevState) => ({ ...prevState, [name]: value }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axiosApi.post('/mealPlans.json', mealMutation);
    navigate('/');
  };

  return (
    <Box component="div">
      <Typography variant="h5" component="h5" marginBottom={3}>
        Add Meal
      </Typography>
      <Grid2 container component="form" onSubmit={onFormSubmit} flexDirection="column" gap={5}>
        <Grid2>
          <select required onChange={handleChange} name="mealTime" style={{ width: '100%', padding: '10px' }}>
            <option disabled>Select Meal</option>
            {MealTimes.map((meal) => (
              <option key={meal} value={meal}>
                {meal.toUpperCase()}
              </option>
            ))}
          </select>
        </Grid2>
        <Grid2>
          <TextField
            required
            type="text"
            onChange={handleChange}
            fullWidth
            color="warning"
            name="mealDescription"
            id="mealDescription"
            label="Meal Description"
            variant="filled"
          />
        </Grid2>
        <Grid2>
          <TextField
            required
            type="number"
            onChange={handleChange}
            fullWidth
            color="warning"
            name="mealCalories"
            id="mealCalories"
            label="Meal Calories"
            variant="filled"
          />
        </Grid2>
        <Grid2 marginLeft="auto">
          <Button type="submit" variant="outlined" color="inherit">
            Add new meal
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default AddMealForm;
