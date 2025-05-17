import { Heading, Link, VStack } from "@chakra-ui/react";
import type { Category } from "../types";

type Props = {
  categories: Category[];
  loading: boolean;
};

const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};

const SideNav = ({ categories }: Props) => {
  const selectedCategory = {
    strCategory: "Beef",
  };

  return (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIES
      </Heading>
      <VStack align="stretch">
        {categories.map((cat) => (
          <Link
            px={2}
            py={1}
            borderRadius={5}
            _hover={{ textDecoration: "none" }}
            key={cat.strCategory}
            {...(cat.strCategory === selectedCategory.strCategory &&
              selectedProps)}
          >
            {cat.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
};

export default SideNav;
