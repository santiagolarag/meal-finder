import {Button, Card, CardBody, CardFooter, Heading, Image, Text} from "@chakra-ui/react";
import type {Meal} from "../types";

interface MealCardProps {
    meal: Meal,
    openRecipe: () => void
}

const MealCard = ({meal, openRecipe}: MealCardProps) => {
    return (
        <Card key={meal.idMeal} boxShadow="lg">
            <CardBody>
                <Image
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    borderRadius='lg'
                />
                <Heading size="md" color="blue.400">
                    <Text mt="4">{meal.strMeal}</Text>
                </Heading>
            </CardBody>
            <CardFooter pt="0">
                <Button
                    color="white"
                    bgColor="blue.400"
                    onClick={openRecipe}
                >
                    See Recipe
                </Button>
            </CardFooter>
        </Card>
    )
};

export default MealCard;
