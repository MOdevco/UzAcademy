import { topimg1, topimg2, topimg3 } from "@/assets"
import { Box, Button, Text } from "@chakra-ui/react"
import {BellIcon} from '@chakra-ui/icons'
import Image from "next/image"
import Link from "next/link"

const Topsection = () => {
  return (
    <Box display={{ base: 'block'  ,lg: 'flex'}}  justifyContent={'center'} alignItems={'center'} pt={'100px'}>
        <Box display={'flex'} flexDirection={'column'} gap={1}>
            <Text fontSize={'50px'}  color={'black'} >
                <span className="nameColor">GRAND ACADEMY</span> 
            </Text>
            <Text color={"black"}>
                <span className="line"> O'quv markazi sizni kutmoqda</span>
            </Text>
            <Text maxW={'600px'} mt={4} color={'black' } fontSize={'32px'}>
                Sifatli ta'lim, natijaviylik, mas'uliyatlilik. Avval tarbiya, keyin ta'lim!
            </Text>
            <Box mt={"10px"} display={{base: 'none' , lg: 'block'}}>
                <Box color={'rgba(199, 90, 0, 0.9)'} fontSize={'28px'} display={'flex'} alignItems={'center'}>
                    <BellIcon />
                    2 mingdan ziyod yoshlar ta'lim olgan
                </Box>
            </Box>
            <Box display={{base: 'block' , lg: 'none'}} color={'black'}  py={2} px={10} style={{borderRadius: "10px"}}>
                <Link href={'/login'} >
                    <Button bg={'white'} border={'1px'} colorScheme='gray'>Ro'yhatdan o'tish</Button>
                </Link>
            </Box>
        </Box>
        <Box display={'flex'} pt={{ base: '50px' ,lg: '0'}} gap={5}>
            <Box display={'flex'} flexDirection={'column'} gap={5}>
                <Box bg={"#FFBE0B"} p={4}>
                    <Image src={topimg1} alt={"top images"} />
                </Box>
                <Image src={topimg3} style={{width: "300px"}} alt={"top img"} />
            </Box>
            <Box bg={'#94D2BD'}>
                <Image src={topimg2}  alt={"top img"} />
            </Box>
        </Box>

    </Box>
  )
}

export default Topsection