import Loc from '@/components/location/loc'
import Layout from '@/layout/layout'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Location = () => {
  return (
   <Layout>

        <Box height={'100vh'}>
            <Loc />
        </Box>
   </Layout>
  )
}

export default Location