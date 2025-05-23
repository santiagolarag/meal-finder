import type {Meal} from "../types";
import {SimpleGrid} from "@chakra-ui/react";
import MealCard from "./MealCard.tsx";
import SkeletonCard from "./SkeletonCard.tsx";

type Props = {
    meals: Meal[],
    loading: boolean
};

const MainContent = ({meals, loading}: Props) => {
    const skeletons: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <SimpleGrid columns={[2, null, 3]} spacing='20px'>
            {
                loading ?
                    skeletons.map((skeleton) => (
                        <SkeletonCard key={skeleton}/>
                    ))
                    :
                    meals.map((meal) => (
                        <MealCard meal={meal} key={meal.idMeal}/>
                    ))
            }
        </SimpleGrid>
    )
};

export default MainContent;
