import { logo } from "@/assets"
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
// import { Icon } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"


const Navbar = () => {

    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize: string) => {
        setSize(newSize)
        onOpen()
      }


    return (
        <Box padding={2} display={'flex '} alignItems={'center'} justifyContent={'space-between'} px={5} color={'white'}>
            <Box  display={'flex'}  alignItems={'center'} gap={'10'} fontSize={"18px"} >

                <Link href={'/'}>
                    <Image src={logo} width={100} alt="" style={{borderRadius: "50%"}} />  
                </Link>

                <Box display={{base: "none" , lg: "block"}}>
                    <Box display={'flex'} alignItems={'center'} gap={10}>
                        <Link href={'/'} className="linkcha">
                            Biz haqimizda
                        </Link>

                        <Link href={'/pageResults'}  className="linkcha">
                            Natijalar
                        </Link> 

                        <Link href={'/location'}  className="linkcha">
                            Joylashuv
                        </Link> 
                    </Box>
                </Box>
            </Box>

            <Box color={'black'} display={{base: 'none' , lg: 'block'}} py={2} px={10} style={{borderRadius: "10px"}}>
                <Link href={'/login'} >
                    <Button bg={'white'} colorScheme='gray'>Ro'yhatdan o'tish</Button>
                </Link>
            </Box>

            <Box display={{ base: "block"  , lg: 'none'}}>
                <Button onClick={() => handleClick(size)} color={'black'} bg={'white'}   m={4}>{<HamburgerIcon />}</Button> 

                <Drawer onClose={onClose} isOpen={isOpen} size={size} >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton fontSize={'2 0px'} pr={10} pt={10} />
                        <DrawerBody>
                            <Box >
                                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} minH={'100vh'} fontSize={'30px'} alignItems={'center'} gap={10}>
                                    <Link href={'/'} className="linkcha">
                                        Biz haqimizda
                                    </Link>

                                    <Link href={'/pageResults'}  className="linkcha">
                                        Natijalar
                                    </Link> 

                                    <Link href={'/location'}  className="linkcha">
                                        Joylashuv
                                    </Link> 

                                    <Box color={'black'} display={{base: 'none' , lg: 'block'}} py={2} px={10} style={{borderRadius: "10px"}}>
                                        <Link href={'./'} >
                                            <Button bg={'white'} colorScheme='gray'>Ro'yhatdan o'tish</Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    )
}

export default Navbar