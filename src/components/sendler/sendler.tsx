import { useDisclosure } from '@chakra-ui/hooks'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Box,
    Textarea,
} from '@chakra-ui/react'
import React from 'react'

const Sendler = ({children, tel}: {children: JSX.Element, tel: any}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
            <Box onClick={onOpen}>
                {children}
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent mx={"10px"} bg={"#4E4E4E"} >
                    <ModalHeader>Xabar yuborish</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display={"flex"} flexDirection={"column"} gap={"12px"} >
                            <Textarea variant={"filled"} placeholder="Habaringizni yozing..." ></Textarea>
                        </Box>
                    </ModalBody>
        
                    <ModalFooter>
                        <Button mt={"10px"} bg={"#EF8354"} _hover={{bg: "#EF8329"}} >Jo'natish</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Sendler