import {Container, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {IoMdSearch} from "react-icons/io";

function Header() {
    return (
        <Container maxW='3xl' mt="1" centerContent>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <IoMdSearch color="gray"/>
                </InputLeftElement>
                <Input type='text' placeholder='Try with Chicken or Beans'/>
            </InputGroup>
        </Container>

    )
}

export default Header;
