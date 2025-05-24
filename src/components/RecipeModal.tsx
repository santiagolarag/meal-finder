import {
    Button,
    Modal,
    ModalContent,
    ModalFooter,
    ModalOverlay
} from "@chakra-ui/react";
import RecipeModalSkeleton from "./RecipeModalSkeleton.tsx";
import type {Meal} from "../types";
import {RecipeModalContent} from "./RecipeModalContent.tsx";

type Props = {
    isOpen: boolean,
    onClose: () => void,
    loading: boolean,
    dataMealDetail: Meal | undefined
};

const RecipeModal = ({isOpen, onClose, loading, dataMealDetail}: Props) => {

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    {
                        loading ?
                            <RecipeModalSkeleton/>
                            :
                            dataMealDetail && <RecipeModalContent dataMealDetail={dataMealDetail}/>
                    }
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default RecipeModal;
