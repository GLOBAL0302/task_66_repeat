import { Box, Button, Grid2, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { MealPlansState } from '../types.ts';
import { axiosApi } from '../axiosApi.ts';
import OneMealPlan from '../components/OneMealPlan/OneMealPlan.tsx';

const Home = () => {
  const [mealPlans, setMealPlans] = useState<MealPlansState[]>([]);

  const totalCalories = mealPlans.reduce((sum, meal) => {
    return sum + parseInt(meal.mealCalories);
  }, 0);

  const fetchMealPlans = useCallback(async () => {
    try {
      const { data } = await axiosApi.get('mealPlans.json');
      if (data) {
        const responseData = Object.keys(data).map((mealPlanId) => {
          return {
            id: mealPlanId,
            ...data[mealPlanId],
          };
        });
        setMealPlans(responseData);
      } else {
        setMealPlans([]);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    void fetchMealPlans();
  }, [fetchMealPlans]);

  return (
    <Box component="div">
      <Grid2 container spacing={2} justifyContent="space-between">
        <Grid2>
          <Typography variant="h5" component="h5">
            Total calories: <strong style={{ textDecoration: 'underline' }}>{totalCalories} kcal</strong>
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

      {mealPlans.map((mealPlan) => (
        <OneMealPlan key={mealPlan.id} oneMealPlan={mealPlan} fetchMealPlans={fetchMealPlans} />
      ))}
    </Box>
  );
};

export default Home;
