import { logo } from "@/assets"
import { Box, Button, Input, Select, Text } from "@chakra-ui/react"
import { collection, getFirestore } from "firebase/firestore"
import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"

import { useCollection } from "react-firebase-hooks/firestore"
import { Context } from "../_app"
import { ChatIcon, ChevronRightIcon } from "@chakra-ui/icons"
import AddCouse from "./addCourse"
import AddTeacher from "./addTeacher"
import Sendler from "@/components/sendler/sendler"
import People from "./peope"
import Remover from "./remover"
import Kalendar from "./kalendar"
import Head from "next/head"

const Admin = () => {

    const { firebase } = useContext(Context)

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const [isOpen, setIsOpen] = useState(true)
    const [isError, setError] = useState(false)
    
    const [isAdmin, setAdmin] = useState(false)

    const [courseNow, setCourseNow] = useState<any>([])

    const [teachers]: any = useCollection(
        collection(getFirestore(firebase), 'teachers'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

    const [students]: any = useCollection(
        collection(getFirestore(firebase), 'students'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

    const [courses]: any = useCollection(
        collection(getFirestore(firebase), 'courses'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const loginAdmin = () => {
        if(login === "admin" && password === "111") {
            setAdmin(true)
            setIsOpen(false)
        } else {
            teachers?.docs.map((i: any) => {
                if (i.data().teachName === login && i.data().login === password) {
                    setIsOpen(false)
                }
                else {
                    setError(true)
                }
            })
        }
    }

    return (
        <Box >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GrandAcademy - boshqaruv paneli</title>
            </Head>
            <Box>
                {
                    isOpen 
                    ?
                    <Box w={"100%"} minH={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                        <form>
                            <Box mx={{base: "10px", md: "0"}} bg={"#222"} boxShadow={"xl"} pt={"40px"} pb={"80px"} rounded={"2xl"} px={{base: "20px", md: "50px"}} >
                                <Link href={"/"}>
                                    <Box mb={"30px"} display={"flex"} justifyContent={"center"}>
                                        <Image src={logo} alt="logo" width={150} />
                                    </Box>
                                    <Box>
                                        {isError && <Text textAlign={"center"} fontWeight={600} py={"5px"} fontSize={"20px"} w={"100%"} color={"red.600"} >Xato qildingiz!</Text>}
                                    </Box>
                                </Link>
                                <Box display={"flex"} flexDirection={"column"} gap={"20px"} > 
                                    <Input value={login} onChange={e => setLogin(e.target.value)} px={"70px"} variant={"filled"} placeholder="Ismingizni kiriting..." />
                                    <Input value={password} onChange={e => setPassword(e.target.value)} px={"70px"} variant={"filled"} placeholder="Familiyangizni kiriting..." />
                                    <Button mt={"10px"} onClick={loginAdmin} bg={"#EF8354"} _hover={{bg: "#EF8329"}} >Boshqarishga kirish</Button>
                                </Box>
                            </Box>
                        </form>
                    </Box>
                    :
                    <Box minH={"100vh"} display={"flex"} >
                        <Box flexDirection={{base: "column", md: "row"}} display={"flex"} alignItems={"start"} width={"100%"} gap={"20px"} >
                            <Box minH={{base: "fit-content", md: "100vh"}} justifyContent={"end"} w={"100%"} maxW={{base: "100%", md: "280px"}} bg={"#222"} px={"20px"} py={"25px"} >
                                <Link href={"/"}>
                                    <Box mb={"30px"} display={"flex"} justifyContent={"center"}>
                                        <Image src={logo} alt="logo" width={100} />
                                    </Box>
                                </Link>
                                <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
                                    {
                                        isAdmin 
                                        ?
                                        courses?.docs.map((i: any) => (
                                            <Box onClick={() => setCourseNow(i.data())} px={"50px"} rounded={"lg"} _hover={{bg: "#EF5354"}} cursor={"pointer"} py={"8px"} bg={ courseNow.courseName === i.data().courseName ? "#4E4E4E" : "#EF8329" }>
                                                <Text textAlign={"center"}>{i.data().courseName}</Text>
                                            </Box>
                                        ))
                                        :
                                        courses?.docs.map((i: any) => {
                                            if (i.data().teacher == login) {
                                                return <Box onClick={() => setCourseNow(i.data())} px={"50px"} rounded={"lg"} _hover={{bg: "#EF5354"}} cursor={"pointer"} py={"8px"} bg={ courseNow.courseName === i.data().courseName ? "#4E4E4E" : "#EF8329" }>
                                                    <Text textAlign={"center"}>{i.data().courseName}</Text>
                                                </Box>
                                            }
                                        })
                                    }
                                </Box>
                            </Box>
                            <Box w={"100%"}>
                                <Box px={"25px"} my={"15px"} display={"flex"} w={"100%"} justifyContent={"space-between"}>
                                    <Box fontSize={"2xl"} display={{base: "none", md: "block"}} >GrandAcademy</Box>
                                    <Box flexDirection={{base: "column", md: "row"}} w={{base: "100%", md: "fit-content"}} display={"flex"} alignItems={"center"} gap={"20px"} >
                                        {isAdmin && <AddTeacher/>}
                                        {isAdmin && <AddCouse/>}
                                        {
                                            new Date().getDate() >= 28
                                            &&
                                            <>
                                                {
                                                    isAdmin &&
                                                    <>
                                                        <Remover/>
                                                        <Kalendar/>
                                                    </>
                                                }
                                            </>
                                        }
                                        <Text display={{base: "none", md: "block"}}>Mas'ul: {login}</Text>
                                    </Box>
                                </Box>
                                {
                                    courseNow?.courseName ?
                                    <Box px={"20px"}>
                                        <Box overflow={"auto"} pr={"10px"} maxH={"85vh"}>
                                            {isAdmin && <Box>
                                                <Text fontSize={"20px"} my={"5px"} fontWeight={"600"} >{courseNow?.courseName}:</Text>
                                                <Box flexDirection={{base: "column", md: "row"}} mb={"15px"} bg={"#EF8329"} px={"20px"} py={"5px"} rounded={"lg"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"12px"} >
                                                    <Text w={{base: "100%", md: "14.25%"}} fontWeight={"600"}>Ism: {courseNow?.teacher}</Text>
                                                    <Text w={{base: "100%", md: "14.25%"}} fontWeight={"600"}>Tel: {courseNow?.tel}</Text>
                                                    <Text w={{base: "100%", md: "14.25%"}} fontWeight={"600"}>Fan: {courseNow?.courseName}</Text>
                                                    <Text w={{base: "100%", md: "14.25%"}} fontWeight={"600"}>Vaqti: {courseNow?.time}</Text>
                                                    <Box display={"flex"} w={{base: "100%", md: "fit-content"}} justifyContent={"space-between"} alignItems={"center"} gap={"15px"}>
                                                        <Sendler tel={courseNow?.tel}>
                                                            <Button>
                                                                <ChatIcon fontSize={"18px"}/>
                                                            </Button>
                                                        </Sendler>
                                                    </Box>
                                                </Box>
                                            </Box>}
                                            <Box display={{base: "none", md: "block"}} >
                                                <Text fontSize={"20px"} my={"5px"} fontWeight={"600"} >O'quvchilar:</Text>
                                                <Box flexDirection={{base: "column", md: "row"}} my={"4px"} bg={"#EF8329"} px={"20px"} py={"8px"} rounded={"lg"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"12px"} >
                                                    <Text w={{base: "100%", md: "13%"}} fontWeight={"600"} >Ism</Text>
                                                    <Text w={{base: "100%", md: "13%"}} fontWeight={"600"}>Familiya</Text>
                                                    <Text w={{base: "100%", md: "13%"}} fontWeight={"600"}>Telefon raqam</Text>
                                                    <Text w={{base: "100%", md: "12%"}} fontWeight={"600"}>Fan</Text>
                                                    <Text w={{base: "100%", md: "12%"}} fontWeight={"600"}>To'lanish</Text>
                                                    <Text w={{base: "100%", md: "18%"}} fontWeight={"600"}>Qo'shimcha</Text>
                                                </Box>
                                            </Box>
                                            {
                                                students?.docs.map((i: any) => {
                                                    if (i.data().course === courseNow.courseName) {
                                                        return <People i={i} />
                                                    }
                                                })
                                            }
                                        </Box>
                                    </Box>
                                    :
                                    <Box>
                                        <Box>
                                            <Text textAlign={"center"} fontSize={"22px"} mt={"100px"} >Kurslarni tanlang!</Text>
                                        </Box>
                                    </Box>
                                }
                            </Box>
                        </Box>
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default Admin