import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    Box,
    Select,
} from '@chakra-ui/react'
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Context } from '../_app';
import { memo, useContext, useState } from 'react';

function AddCouse() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { auth, db, firebase } = useContext(Context)

    const [ courseName, setCourseName ] = useState("")
    const [ time, setTime ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ teacher, setTeacher ] = useState("")
    const [ tel, setTel ] = useState("")

    const [teachers]: any = useCollection(
        collection(getFirestore(firebase), 'teachers'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

    const addCourse = async () => {
        if (courseName) {
            const coursesRef = doc(db, 'courses', `${courseName}`);
            await setDoc(coursesRef, { 
                courseName,
                time,
                price,
                teacher,
                tel
            }, { merge: true });
        }
        onClose()
    }

    return (
        <>
            <Button onClick={onOpen}>Kurs qo'shish</Button>
    
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={"#4E4E4E"} >
                    <ModalHeader>Kurs qo'shish</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display={"flex"} flexDirection={"column"} gap={"12px"} >
                            <Input value={courseName} onChange={e => setCourseName(e.target.value)} px={"70px"} variant={"filled"} placeholder="Kurs fani..." />
                            <Input value={time} onChange={e => setTime(e.target.value)} px={"70px"} type='time' variant={"filled"} placeholder="Boshlanish vaqti..." />
                            <Input value={price} onChange={e => setPrice(e.target.value)} px={"70px"} type='number' variant={"filled"} placeholder="To'lovi (oyiga) ..." />
                            <Input value={tel} onChange={e => setTel(e.target.value)} px={"70px"} type='number' variant={"filled"} placeholder="O'qituvchi telefon raqami..." />
                            <Select value={teacher} onChange={e => setTeacher(e.target.value)} cursor={"pointer"} placeholder="O'qituvchini tanlang:">
                                {
                                    teachers?.docs.map((i: any) => (
                                        <option value={i.data().teachName}>{i.data().teachName} {i.data().surename}</option>
                                    ))
                                }
                            </Select>
                        </Box>
                    </ModalBody>
        
                    <ModalFooter>
                        <Button onClick={addCourse} mt={"10px"} bg={"#EF8354"} _hover={{bg: "#EF8329"}} >Qo'shish</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default memo(AddCouse)