import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Link from "next/link"






const CardsResults = ({image}: any) => {
    return (
        <Box>
           <Box>
                <Card className="hover" maxW='xs' mt={10} bg={' rgba(199, 90, 0, 0.58)'}>
                  <CardBody>
                    <Image src={image} alt='Green double couch with wooden legs'  />
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>Mukammal daraja</Heading>
                    </Stack>
                  </CardBody>
                </Card>
            </Box>
        </Box>
    )
}

export default CardsResults