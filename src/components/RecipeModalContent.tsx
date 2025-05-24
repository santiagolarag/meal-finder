import type {Meal} from "../types";
import {Heading, Image, ModalBody, ModalCloseButton, ModalHeader, OrderedList, Text} from "@chakra-ui/react";

type Props = {
    dataMealDetail: Meal
}

const joinIngredients = (dataMealDetail: Meal) => {
    const ingredients = []
    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}` as keyof Meal;
        const measureKey = `strMeasure${i}` as keyof Meal;
        if (dataMealDetail[ingredientKey])
            ingredients.push(`${dataMealDetail[ingredientKey]} - ${dataMealDetail[measureKey]}`)
    }
    return ingredients
}


export function RecipeModalContent({dataMealDetail}: Props) {
    const ingredients = joinIngredients(dataMealDetail)
    return (
        <>
            <ModalHeader>
                {dataMealDetail.strMeal}
            </ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
                <Image
                    width="100%"
                    borderRadius="lg"
                    src={dataMealDetail.strMealThumb}
                    alt={dataMealDetail.strMeal}
                ></Image>
                <Heading my={4} size="md">Ingredients</Heading>
                <OrderedList my={4}>
                    {
                        ingredients.map((ingredient) => (
                            <Text key={ingredient}>{ingredient}</Text>
                        ))
                    }
                </OrderedList>
                <Text whiteSpace="pre-line">
                    {dataMealDetail.strInstructions}
                </Text>
            </ModalBody>
        </>
    )
}