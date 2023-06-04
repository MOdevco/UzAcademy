import { logo } from "@/assets"
import { Box, Button, Input, Select } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"
import { Context } from "./_app"
import { collection, doc, getFirestore, setDoc } from "firebase/firestore"

import { useRouter } from "next/router"
import { useCollection } from "react-firebase-hooks/firestore"
import { reviewData } from "@/config"
import Head from "next/head"

const Login = () => { 

    const router = useRouter()

    const { db, firebase } = useContext(Context)

    const [nameStudent, setNameStudent] = useState('')
    const [surename, setSurename] = useState('')
    const [tel, setTel] = useState('')
    const [course, setCourse] = useState('')

    const [courses]: any = useCollection(
        collection(getFirestore(firebase), 'courses'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

    const addUser = async () => {
        if (nameStudent) {
            const messagesRef = doc(db, 'students', `${nameStudent} ${surename}`);
            await setDoc(messagesRef, { 
                nameStudent,
                surename,
                tel,
                course,
                isPayed: false,
                review: reviewData,
                comeDay: `${new Date().getDate()}.${new Date().getMonth()}.${ new Date().getFullYear()}`
            }, { merge: true });
            router.push('/')
        }
    }

    return (
        <Box w={"100%"} minH={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Ro'yhatdan o'tish | O'quvchilar uchun</title>
            </Head>
            <form>
                <Box mx={{base: "10px", md: "0"}}  bg={"#222"} boxShadow={"xl"} pt={"40px"} pb={"80px"} rounded={"2xl"} px={{base: "20px", md: "50px"}} >
                    <Link href={"/"}>
                        <Box mb={"30px"} display={"flex"} justifyContent={"center"}>
                            <Image src={logo} alt="logo" width={150} />
                        </Box>
                    </Link>
                    <Box display={"flex"} flexDirection={"column"} gap={"20px"} > 
                        <Input value={nameStudent} onChange={e => setNameStudent(e.target.value)} px={"70px"} variant={"filled"} placeholder="Ismingizni kiriting..." />
                        <Input value={surename} onChange={e => setSurename(e.target.value)} px={"70px"} variant={"filled"} placeholder="Familiyangizni kiriting..." />
                        <Input value={tel} onChange={e => setTel(e.target.value)} px={"70px"} type="number" variant={"filled"} placeholder="Telefon raqamingizni kiriting..." />
                        <Select value={course} onChange={e => setCourse(e.target.value)} cursor={"pointer"} placeholder="Kursni tanlang:">
                            {
                                courses?.docs.map((i: any) => (
                                    <option value={i.data().courseName}>{i.data().courseName}</option>
                                ))
                            }
                        </Select>
                        <Button mt={"10px"} onClick={addUser} bg={"#EF8354"} _hover={{bg: "#EF8329"}} >Ro'yhatdan o'tish</Button>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

export default Login