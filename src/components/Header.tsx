import {Button, Container, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {IoMdSearch} from "react-icons/io";
import {useForm} from "react-hook-form";
import type {SearchForm} from "../types";

type Props = {
    onSubmit: (data: SearchForm) => void
}

function Header({onSubmit}: Props) {
    const {register, formState, handleSubmit} = useForm<SearchForm>();
    return (
        <Container maxW='3xl' mt="1" centerContent>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <IoMdSearch color="gray"/>
                    </InputLeftElement>
                    <Input
                        focusBorderColor={formState.errors.search ? "crimson" : "blue.400"}
                        isInvalid={!!formState.errors.search}
                        {...register('search', {required: true})}
                        type='text' placeholder='Try with Chicken or Beans'/>
                    <Button type="submit" bgColor="blue.400" color="white" ml="2">Search</Button>
                </InputGroup>
            </form>
        </Container>

    )
}

export default Header;
