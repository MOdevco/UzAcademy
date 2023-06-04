import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardsLessons = ({image , title , text}: any) => {
  return (
    <Box>
        <Card className='hover' maxW='sm' height={'450px'} mt={10} bg={'rgba(199, 90, 0, 0.6)'}>
            <CardBody>
              <Image  src={image} alt={'usa img'} />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{title}</Heading>
                <Text>
                    {text}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Link href={'/login'}>
                        <Button _hover={{bg: 'rgba(199, 90, 0, 1)'}} bg={'rgba(199, 90, 0, 0.8)'} color={'white'}  variant='solid' colorScheme='blue'>
                            Ro'yhatdan o'tish
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </Box>
  )
}

export default CardsLessons