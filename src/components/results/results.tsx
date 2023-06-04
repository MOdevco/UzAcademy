import { natija1, natija2, natija3, natija4, ser1, ser2, ser3, ser4 } from "@/assets"
import { Box,  Heading } from "@chakra-ui/react"
import Image from "next/image"
import CardsResults from "../cardsResults/cardsResults"


const Results = () => {
  return (
    <Box mt={{base: "100px" , lg: "100px"}} display={'flex'} flexDirection={'column'}>
      <Box color={'black'}>
        <Heading textAlign={'center'}>
            O'quvchilarimiz tomonidan olingan natijalar
        </Heading>
      </Box>

      <Box  display={'flex'} flexDirection={{base: 'column' , md: 'row'}} gap={10} alignItems={'center'} mt={10} justifyContent={'space-between'}>
        <CardsResults image={ser1} />
        <CardsResults image={ser2} />
        <CardsResults image={ser3} />
        <CardsResults image={ser4} />
      </Box>
      
    </Box>
  )
}

export default Results