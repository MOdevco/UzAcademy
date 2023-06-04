import { Box, Heading } from '@chakra-ui/react'
import {CalendarIcon} from '@chakra-ui/icons'

const CheckCards = ({text}: any) => {
  return (
    <Box>   
        <Box bg={'rgba(199, 90, 0, 0.3)'}  borderRadius={'15px'} p={'30px'} w={'100%'}  display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} gap={'30px'}>
            <Box fontSize={'50px'} color={'rgba(199, 90, 0, 0.9)'}>
                <CalendarIcon />
            </Box>
            <Heading fontSize={'20px'}>
                {text}
            </Heading>
        </Box>
    </Box>
  )
}

export default CheckCards