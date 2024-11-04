import { Box } from '@mui/material';
import AddMealForm from '../components/AddMealForm/AddMealForm.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosApi } from '../axiosApi.ts';
import { useCallback, useEffect, useState } from 'react';
import { MealMutationState } from '../types.ts';

const EditMeal = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [oneMealPlan, setOneMealPlan] = useState<MealMutationState | null>();

  const updateMealPlan = async (mealMutationState: MealMutationState) => {
    await axiosApi.put(`/mealPlans/${id}.json`, mealMutationState);
    navigate('/')
  };

  const fetchOneMealPlan = useCallback(async () => {
    try {
      const { data } = await axiosApi.get(`/mealPlans/${id}.json`);
      if (data) {
        setOneMealPlan(data);
      }
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  useEffect(() => {
    void fetchOneMealPlan();
  }, [fetchOneMealPlan]);

  return (
    oneMealPlan && (
      <Box component="div">
        <AddMealForm
          existingMealPlan={oneMealPlan}
          updateMealPlan={(mealMutationState) => {
            updateMealPlan(mealMutationState);
          }}
          edit
        />
      </Box>
    )
  );
};

export default EditMeal;
