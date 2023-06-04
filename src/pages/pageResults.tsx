import CardsResults from '@/components/cardsResults/cardsResults'
import Layout from '@/layout/layout'
import { Box, Heading } from '@chakra-ui/react'
import { natija1, natija2, natija3, natija4, ser1, ser10, ser2, ser3, ser4, ser5, ser6, ser7, ser8, ser9 } from "@/assets"


const PageResults = () => {
  return (
    <Layout>
        <Box minH={'100vh'}>
            <Box mt={{base: "100px" , lg: "100px"}} display={'flex'} flexDirection={'column'}>
                <Box color={'black'}>
                  <Heading textAlign={'center'}>
                      O'quvchilarimiz tomonidan olingan natijalar
                  </Heading>
                </Box>

                <Box  display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={10} alignItems={'center'} mt={10} justifyContent=   {'center'}>
                  <CardsResults image={ser1} />
                  <CardsResults image={ser2} />
                  <CardsResults image={ser3} />
                  <CardsResults image={ser4} />
                </Box>

                <Box  display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={10} alignItems={'center'} mt={10} justifyContent=   {'center'}>
                  <CardsResults image={ser5} />
                  <CardsResults image={ser6} />
                  <CardsResults image={ser7} />
                  <CardsResults image={ser8} />
                </Box>

                <Box  display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={10} alignItems={'center'} mt={10} justifyContent=   {'center'}>
                  <CardsResults image={ser9} />
                  <CardsResults image={ser10} />
                </Box>

            </Box>
        </Box>
    </Layout>
  )
}

export default PageResults