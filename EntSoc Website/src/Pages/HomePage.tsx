import { Box, VStack, Text, Button } from '@chakra-ui/react';

export default function HomePage() {
    const backgroundImageUrl = '/Old-College.jpg'; 
    const signUpUrl = "https://www.eusa.ed.ac.uk/activities/view/edinburghentrepreneurs?ref=conversationalainews.com";
    const handleSignUpClick = () => {
        window.open(signUpUrl, '_blank');
    }

    return (
        <Box bg = "#AFEEEE">
            <Box
                position="relative"
                height="100vh" 
                width="100vw"
                overflow="hidden"
                bgImage={`url('${backgroundImageUrl}')`}
                bgPosition="center 60px" 
                bgRepeat="no-repeat"
                bgSize="cover"
                bgAttachment="fixed"
            >
                <VStack
                    position="absolute"
                    top="40%"
                    left="50%"
                    transform="translate(-50%, -40%)"
                    textAlign="center"
                    color="white"
                    spacing={4}
                    p="4"
                    bgGradient="linear(to-t, transparent, blackAlpha.700)"
                    borderRadius="lg"
                    maxWidth="lg"
                >
                    <Text fontSize="xl" mb={1}>
                        Welcome!
                    </Text>
                    <Text fontSize="4xl" fontWeight="bold" bgClip="text" bgGradient="linear(to-r, teal.300, blue.500)">
                        EDINBURGH UNIVERSITY ENTREPRENEURS
                    </Text>
                    <Text fontSize="2xl">
                        Dream. Develop. Disrupt.
                    </Text>
                    <Button colorScheme="teal" size="lg" onClick={handleSignUpClick}>
                        Sign Up
                    </Button>
                </VStack>
                <Box height="150vh" bg="transparent" /> {/* Additional content to enable scrolling */}
            </Box>
            <Box>
                

            </Box>
        </Box>

    );
}
