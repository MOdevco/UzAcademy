import Sendler from "@/components/sendler/sendler"
import { ChatIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box, Button, Text, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, 
    DrawerContent, DrawerCloseButton, useDisclosure, Input, Divider, } from "@chakra-ui/react"
import { deleteDoc, doc, setDoc } from "firebase/firestore"
import { Context } from "../_app"
import { memo, useContext, useEffect, useState } from "react"

const TableItem = ({item}: any) => {
    return (
        <Td py={"5px"} px={{base: "0px", md: "15px"}}>
            <Box rounded={"lg"} cursor={"pointer"} _hover={{bg: `${item?.isCome == true ? "#EF8329" : "#222"}`}} bg={item?.isCome == true ? "#EF8329" : "#111"} display={"flex"} opacity={item?.offset && "0.4"} justifyContent={"center"} alignItems={"center"} w={"35px"} px={"10px"} height={"38px"}>
                {item?.day}
            </Box>
        </Td>
    )
}

const People = ({i}: any) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [thisI, setThis] = useState<any>([])

    useEffect(() => {
        const filtered = i.data().review.filter((i: any) => {
            if (i.day == new Date().getDate()) {
                return i
            }
        })
        setThis(filtered[0])
    }, [i])

    const { db } = useContext(Context)

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const pay = () => {
        deleteDoc(doc(db, "students", i.id))
        if (i) {
            const studentsRef = doc(db, 'students', `${i.data().nameStudent} ${i.data().surename}`);
            setDoc(studentsRef, { 
                nameStudent: i.data().nameStudent,
                surename: i.data().surename,
                tel: i.data().tel,
                course: i.data().course,
                isPayed: !i.data().isPayed,
                review: i.data().review
            }, { merge: true });
        }
    }

    const comed = () => {
        deleteDoc(doc(db, "students", i.id))
        if (i) {
            const studentsRef = doc(db, 'students', i.id);

            const rev = [
                ...i.data().review,
            ]

            rev.map((i: any) => {
                if (i.day == new Date().getDate() && !i?.offset) {
                    i.isCome = !i.isCome
                }
            })

            setDoc(studentsRef, { 
                nameStudent: i.data().nameStudent,
                surename: i.data().surename,
                tel: i.data().tel,
                course: i.data().course,
                isPayed: i.data().isPayed,
                review: rev
            }, { merge: true });
        }
    }

    return (
        <>
            <Box flexDirection={{base: "column", md: "row"}} my={"4px"} bg={"#4E4E4E"} px={"20px"} py={{base: "10px", md: "5px"}} rounded={"lg"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"12px"} >
                <Text w={{base: "100%", md: "13%"}} >{i.data().nameStudent}</Text>
                <Text w={{base: "100%", md: "13%"}}>{i.data().surename}</Text>
                <Text w={{base: "100%", md: "13%"}}>{i.data().tel}</Text>
                <Text w={{base: "100%", md: "12%"}}>{i.data().course}</Text>
                <Box w={{base: "100%", md: "12%"}} display={"flex"} alignItems={"center"} gap={"10px"} >
                    <Text>{i.data().isPayed ? (
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"6px"} >
                            <Text size={"sm"}>To'langan</Text>
                            <Button onClick={pay} size={"sm"}>Bekor qilish</Button>
                        </Box>
                    ) : "To'lanmagan" }</Text>
                    {!i.data().isPayed && <Button onClick={pay} size={"sm"} bg={"#EF8354"} _hover={{bg: "#EF8329"}}>To'ladi</Button>}
                </Box>
                <Box w={{base: "100%", md: "18%"}} display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"15px"}>
                    <Sendler tel={i.data().tel}>
                        <Button>
                            <ChatIcon fontSize={"18px"}/>
                        </Button>
                    </Sendler>
                    {thisI.isCome == false ? <Button w={"150px"} size={"sm"} onClick={comed} bg={"#EF8354"} _hover={{bg: "#EF8329"}}>Keldi!</Button> : <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"6px"} w={"150px"} textAlign={"center"} >
                        <Text>Kelgan</Text>
                        <Button onClick={comed} size={"xs"}>Bekor qilish</Button>
                    </Box>}
                    <Button onClick={onOpen}>
                        <ChevronRightIcon fontSize={"20px"} />
                    </Button>
                </Box>
            </Box>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement={"left"}
                size={"lg"}
            >
                <DrawerOverlay />   
                <DrawerContent bg={"#222"} >
                <DrawerCloseButton />
                <DrawerHeader>
                    <Box flexDirection={{base: "column", md: "row"}} pb={"12px"} display={"flex"} alignItems={{base: "start", md: "center"}} justifyContent={"space-between"} >
                        <Box display={"flex"} alignItems={"center"} gap={"6px"} >
                            <Text>{i.data().nameStudent}</Text>
                            <Text>{i.data().surename}</Text>
                        </Box>
                        <Text mr={"50px"} >+{i.data().tel}</Text>
                    </Box>
                    <Divider />
                </DrawerHeader>

                <DrawerBody>
                    <Box flexDirection={{base: "column", md: "row"}} display={"flex"} justifyContent={"space-between"} >
                        <Text fontSize={"lg"} fontWeight={"600"} >{monthNames[new Date().getMonth()]} oyini hisobotlari:</Text>
                        <Text fontSize={"lg"} fontWeight={"600"} >Qabul qilingan: {i.data().comeDay} da</Text>
                    </Box>
                    <Box my={"30px"}>

                    <TableContainer>
                        <Table variant={"unstyled"}>
                            <Tbody>
                                <Tr>
                                    <Th p={{base: "3px", md: "18px" }}>Du</Th>
                                    <Th p={{base: "3px", md: "18px" }}>Se</Th>
                                    <Th p={{base: "3px", md: "18px" }}>Cho</Th>
                                    <Th p={{base: "3px", md: "18px" }}>Pay</Th>
                                    <Th p={{base: "3px", md: "18px" }}>Ju</Th>
                                    <Th p={{base: "3px", md: "18px" }}>Sha</Th>
                                    <Th p={{base: "3px", md: "18px" }}>Yak</Th>
                                </Tr>

                                <Tr>
                                    <TableItem item={i.data().review[0]} />
                                    <TableItem item={i.data().review[1]} />
                                    <TableItem item={i.data().review[2]} />
                                    <TableItem item={i.data().review[3]} />
                                    <TableItem item={i.data().review[4]} />
                                    <TableItem item={i.data().review[5]} />
                                    <TableItem item={i.data().review[6]} />
                                </Tr>
                                <Tr>
                                    <TableItem item={i.data().review[7]} />
                                    <TableItem item={i.data().review[8]} />
                                    <TableItem item={i.data().review[9]} />
                                    <TableItem item={i.data().review[10]} />
                                    <TableItem item={i.data().review[11]} />
                                    <TableItem item={i.data().review[12]} />
                                    <TableItem item={i.data().review[13]} />
                                </Tr>
                                <Tr>
                                    <TableItem item={i.data().review[14]} />
                                    <TableItem item={i.data().review[15]} />
                                    <TableItem item={i.data().review[16]} />
                                    <TableItem item={i.data().review[17]} />
                                    <TableItem item={i.data().review[18]} />
                                    <TableItem item={i.data().review[19]} />
                                    <TableItem item={i.data().review[20]} />
                                </Tr>
                                <Tr>
                                    <TableItem item={i.data().review[21]} />
                                    <TableItem item={i.data().review[22]} />
                                    <TableItem item={i.data().review[23]} />
                                    <TableItem item={i.data().review[24]} />
                                    <TableItem item={i.data().review[25]} />
                                    <TableItem item={i.data().review[26]} />
                                    <TableItem item={i.data().review[27]} />
                                </Tr>
                                <Tr>
                                    <TableItem item={i.data().review[28]} />     
                                    <TableItem item={i.data().review[29]} />   
                                    <TableItem item={i.data().review[30]} />
                                    <TableItem item={i.data().review[31]} />
                                    <TableItem item={i.data().review[32]} />
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    </Box>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default memo(People)