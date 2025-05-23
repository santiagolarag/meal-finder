import type {Meal} from "../types";
import {Text, SimpleGrid} from "@chakra-ui/react";
import MealCard from "./MealCard.tsx";

type Props = {
    meals: Meal[],
    loading: boolean
};

const MainContent = ({meals, loading}: Props) => {

    return (
        <SimpleGrid columns={[2, null, 3]} spacing='20px'>
            {
                loading ? <Text>Loading...</Text> :
                    (
                        meals.map((meal) => (
                            <MealCard meal={meal} key={meal.idMeal}/>
                        ))
                    )
            }
        </SimpleGrid>


    )
};

export default MainContent;
