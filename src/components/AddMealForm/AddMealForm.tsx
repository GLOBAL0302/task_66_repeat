import { Box, Button, CircularProgress, Grid2, TextField, Typography } from '@mui/material';
import { MealTimes } from '../../CONSTANTS.ts';
import React, { useState } from 'react';
import { MealMutationState } from '../../types.ts';
import { axiosApi } from '../../axiosApi.ts';
import { useNavigate } from 'react-router-dom';

const initialState = {
  mealTime: '',
  mealDescription: '',
  mealCalories: '',
};

const AddMealForm = () => {
  const [mealMutation, setMealMutation] = useState<MealMutationState>(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMealMutation((prevState) => ({ ...prevState, [name]: value }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axiosApi.post('/mealPlans.json', mealMutation);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      navigate('/');
    }
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
          <Button type="submit" variant="outlined" color="inherit" disabled={loading}>
            Add new meal {loading && <CircularProgress color="inherit"/>}
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default AddMealForm;
