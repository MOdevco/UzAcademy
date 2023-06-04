import Layout from '@/layout/layout'
import { Box, Heading } from '@chakra-ui/react'
import CheckCards from '../checkCards/checkCards'


const Nmauchun = () => {
  return (
      <Box mt={'100px'} color={'black'} textAlign={'center'} >
          <Box display={'flex'} flexDirection={'column'} gap={'50px'}>
            <Heading>
              Nma uchun Grand Academy?
            </Heading>


            <Box display={'flex'} justifyContent={'space-between'} flexDirection={{base: 'column', md: 'row'}} alignItems={'center'} gap={'50px'}>
              <CheckCards text={'Professional ustozlar darsi '} />
              <CheckCards text={`Akademik-yordamchi ustozlar mavjudligi (ikkinchi ustoz)`}/>
              <CheckCards text={'Oy yakunida maxsus sinovlar'} />
            </Box>

            <Box display={'flex'} justifyContent={'space-between'} flexDirection={{base: 'column', md: 'row'}} alignItems={'center'} gap={'50px'}>
              <CheckCards text={'Har yakshanba qo‘shimcha dars va imtihonlar '} />
              <CheckCards text={`Grantlar (bepul o‘qish imkoniyati) `}/>
              <CheckCards text={'Olimpiada va turli tanlovlarda ishtirok etish'} />
            </Box>

            <Box display={'flex'} justifyContent={'space-between'} flexDirection={{base: 'column', md: 'row'}} alignItems={'center'} gap={'50px'}>
              <CheckCards text={'IELTS va co-working (support) zonalari '} />
              <CheckCards text={`Master-klass, trening va o‘quv seminarlari`}/>
              <CheckCards text={'Maxsus kitoblar, testlar, qo‘llanmalar'} />
            </Box>
          </Box>
      </Box>
  )
}

export default Nmauchun