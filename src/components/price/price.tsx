import { Box, Card, CardBody, Text } from '@chakra-ui/react'
import React from 'react'

const Price = ({englishGramar , ehlish , pre , ielts , Fanlar , tarix , fizika , matem , tillar , rus , arab , korea , fan , bio , kimyo , web , max , datur , kom , design}: any) => {
  return (
    <Box >
        <Card bg={'white'} h={{base:'500px' , md: '400px'}} color={'black'} borderRadius={'10px'}>
            <Box bg={'rgba(199, 90, 0, 0.9)'} w={'100%'} h={'20px'} borderTopRightRadius={'10px'} borderTopLeftRadius={'10px'}>
                
            </Box>
            <CardBody fontSize={{base: '20px' , md: '25px'  }} display={'flex'} fontWeight={300} flexDirection={'column'} lineHeight={'70px'}>
              <Box>
                <Text fontWeight={600} >{ehlish}</Text>
                <Text>{englishGramar}</Text>
                <Text>{pre}</Text>
                <Text>{ielts}</Text>
              </Box>

              <Box>
                <Text fontWeight={600}>{Fanlar}</Text>
                <Text>{tarix}</Text>
                <Text>{fizika}</Text>
                <Text>{matem}</Text>
              </Box>


              <Box>
                <Text fontWeight={600}>{tillar}</Text>
                <Text>{rus}</Text>
                <Text>{arab}</Text>
                <Text>{korea}</Text>
              </Box>

              <Box>
                <Text fontWeight={600}>{fan}</Text>
                <Text>{bio}</Text>
                <Text>{kimyo}</Text>
                {/* <Text>{korea}</Text> */}
              </Box>

              <Box>
                <Text fontWeight={600}>{web}</Text>
                <Text>{max}</Text>
                <Text>{datur}</Text>
                <Text>{kom}</Text>
                <Text>{design}</Text>
              </Box>


            </CardBody>
        </Card>
    </Box>
  )
}

export default Price