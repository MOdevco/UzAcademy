import { bg } from "@/assets";
import MainBody from "@/components/main/main";
import Layout from "@/layout/layout";
import { Box, Text } from "@chakra-ui/react";
import PageResults from "./pageResults";

export default function Home() {
    return (
        <Layout >
            <Box className="bg">
                <Box maxW={"1330px"} mx={"auto"} >
                <Box p={5}>
                    <MainBody />
                </Box>
                </Box>
            </Box>
        </Layout>
    )
}