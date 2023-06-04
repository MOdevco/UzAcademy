import { Box, Button, Heading, Text } from '@chakra-ui/react'
import {ArrowRightIcon , ArrowForwardIcon} from '@chakra-ui/icons'
import Link from 'next/link'

const PageRedister = () => {
  return (
    <Box mt={'100px'}>

        <Box bg={'#23caac'} p={'30px'} display={'flex'} flexDirection={{base: 'column' , md: 'row'}} alignItems={'center'} justifyContent={'space-between'} borderRadius={'15px'}>
            <Box>
                <Box color={'black'}>
                    <Text color={'rgba(199, 90, 0, 0.8)'} fontSize={'15px'} fontWeight={'600'}>
                        Malakaliy ustozlardan ta'lim oling
                    </Text>
                    <Box  display={'flex'} alignItems={'center'} gap={'20px'}>
                        <Heading>
                            Kursga yoziling
                        </Heading>
                        <Box display={{base: 'none' , md: 'block'}}>
                            <ArrowRightIcon />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Link href={'/login'}>
                    <Button color={'black'} border={'none'} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                        Ro'yhatdan O'tish
                    </Button>
                </Link>
            </Box>
        </Box>


    </Box>
  )
}

export default PageRedister