import { Box, Button, Text } from "@chakra-ui/react"
import Sciences from "../sciences/sciences"
import Results from "../results/results"
import Topsection from "../topsection/topsection"
import Nmauchun from "../why/why"
import PageRedister from "../pageRegister/pageRegister"


const MainBody = () => {
  return (
    <Box>
        <Box>
            <Topsection />
        </Box>

        <Box>
            <Sciences />
        </Box>

        <Box>
          <PageRedister />
        </Box>

        <Box>
          <Nmauchun />
        </Box>

        <Box>
            <Results />
        </Box>

        
    </Box>
  )
}

export default MainBody