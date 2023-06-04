import Footer from "@/components/footer/footer"
import Navbar from "@/components/navbar/navbar"
import Price from "@/components/price/price"
import { Box, Heading } from "@chakra-ui/react"
import Head from "next/head"
import { useEffect } from "react"

const Layout = ({children}: {children: JSX.Element}) => {

    useEffect(() => {
        localStorage.setItem("chakra-ui-color-mode", "dark")
    }, [])

    return (
        <Box className={'bg'} >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>GrandAcademy o'quv markazi</title>
                <link rel="shortcut icon" href="@/assets/logo.png" type="image/x-icon" />
            </Head>
            <Box >
               <Box  bg={'#222'}  className={'boxShadow'}>
                <Navbar />
               </Box>
                <Box>
                    {children}
                </Box>

                <Box w={'100%'} h={{base: '470vh' , md: '60vh'}} bg={'#51dbc2'} display={'flex'} flexDirection={'column'} gap={{base: '30px' , md: '40px'}} mt={'100px'} p={50}>
                    <Box textAlign={'center'} color={'black'}>
                        <Heading>
                            Tillar va Kurslar Narxlari
                        </Heading>
                    </Box>

                    <Box display={'flex'} flexDirection={{base: 'column' , md: 'row'}} justifyContent={'space-evenly'}>
                        <Box mt={'30px'} textAlign={{base: 'center' , md: 'start'}}>
                            <Price ehlish={'ENGLISH'} englishGramar={'GRAMATIKA - 180ming'} pre={'PRE IELTS - 200MING'} ielts={'IELTS - 230MING'}  />
                        </Box>
                        <Box mt={'30px'} textAlign={{base: 'center' , md: 'start'}}>
                            <Price Fanlar={'FANLAR'} tarix={'TARIX - 180ming'} fizika={'FIZIKA - 180ming'} matem={'MATEMATIKA - 180ming'} />
                        </Box>
                        <Box mt={'30px'} textAlign={{base: 'center' , md: 'start'}}>
                            <Price tillar={'TILLAR'} rus={'RUS TILI - 180ming'} arab={'ARAB TILI - 180ming'} korea={'KOREYS TILI - 200ming'}/>
                        </Box>
                        <Box mt={'30px'} textAlign={{base: 'center' , md: 'start'}}>
                            <Price fan={'FANLAR'} bio={'BIYALOGIYA - 180ming'} kimyo={'KIMYO - 180ming'} />
                        </Box>
                        <Box mt={'30px'} textAlign={{base: 'center' , md: 'start'}}>
                            <Price web={'IT'} max={'3D MAX - 350ming'} datur={'FROND END - 250ming'} kom={'SAVODXONLIK - 200ming'} design={'WEB DESIGN - 180ming'}/>
                        </Box>
                    </Box>
                </Box>

                <Box bg={'#222'} mt={'80px'} >
                    <Footer/>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout