import { Box, Heading, Text } from "@chakra-ui/react"
import {BellIcon , PhoneIcon , EmailIcon , WarningIcon} from '@chakra-ui/icons'


const Footer = () => {
  return (
    <Box p={10} >
      <Box display={'flex'} color={'white'} flexDirection={{base: 'column' , md: 'row'}} alignItems={{base: 'self-start' , md: 'center'}} gap={{base: '100px' , md: '0'}} justifyContent={'space-between'}>
        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
          <Heading as='h3' size='lg'>
            GRAND ACADEMY
          </Heading>

          <Box fontSize={'30px'} display={'flex'} alignItems={'center'}>
            <BellIcon />
            <Box fontSize={'20px'}>
              <Text>
                Manzil: Quva Tuman Qayqubot Ko'chasi 105 - uy 
              </Text>
            </Box>
          </Box>
        </Box>

        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'10px'}>
          <Box fontSize={'30px'} display={'flex'} gap={'10px'}>
            <PhoneIcon />
            <Box fontSize={'20px'}>
              <Text >
                +99891-787-57-50
              </Text>
            </Box>
          </Box>
          <Box fontSize={'30px'} display={'flex'} gap={'10px'}>
            <EmailIcon />
            <Box fontSize={'16px'}>
              <Text >
                modevco05@gmail.com
              </Text>
            </Box>
          </Box>

        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={'10px'} >
          <Text fontSize={'20px'}>
            Ichtimoiy tarmoqlarimiz
          </Text>
          <Box fontSize={'20px'} display={'flex'} gap={'20px'}>
            <WarningIcon />
            <WarningIcon />
            <WarningIcon />
            <WarningIcon />
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default Footer