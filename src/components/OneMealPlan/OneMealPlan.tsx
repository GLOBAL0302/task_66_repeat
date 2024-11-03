import { Box, Button, Grid2, Typography } from '@mui/material';
import { MealPlansState } from '../../types.ts';
import { axiosApi } from '../../axiosApi.ts';

interface Props {
  oneMealPlan: MealPlansState;
  fetchMealPlans: () => void;
}

const OneMealPlan: React.FC<Props> = ({ oneMealPlan, fetchMealPlans }) => {
  const deleteMealPlan = async (id: string) => {
    await axiosApi.delete(`/mealPlans/${id}.json`);
    void fetchMealPlans();
  };
  return (
    <Box marginY={2}>
      <Grid2 container alignItems="center" sx={{ border: '1px solid black', padding: '5px' }}>
        <Grid2>
          <Typography variant="body1" component="p">
            {oneMealPlan.mealTime}
          </Typography>
          <Typography variant="body1" component="p">
            {oneMealPlan.mealDescription}
          </Typography>
        </Grid2>
        <Grid2 marginLeft="auto">
          <strong style={{ textDecoration: 'underline' }}>{oneMealPlan.mealCalories} kcal</strong>
        </Grid2>
        <Grid2 sx={{ marginLeft: '20%' }}>
          <Button variant="outlined" color="inherit" sx={{ marginRight: 2 }}>
            Edit
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => {
              deleteMealPlan(oneMealPlan.id);
            }}
          >
            Delete
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default OneMealPlan;
