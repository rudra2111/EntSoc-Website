import { Box, VStack, Text, Button } from '@chakra-ui/react';

export default function HomePage() {
    const backgroundImageUrl = '/McEwanHall.jpg'; 
    const signUpUrl = "https://www.eusa.ed.ac.uk/activities/view/edinburghentrepreneurs?ref=conversationalainews.com";

    const handleSignUpClick = () => {
        window.open(signUpUrl, '_blank');
    }

    return (
        <Box>
            {/* Background Image Section */}
            <Box
                position="relative"
                minHeight={{ base: "100vh", md: "100vh" }}  
                width="100vw"
                overflow="hidden"
                bgImage={`url('${backgroundImageUrl}')`}
                bgPosition="center"  
                bgSize="cover" 
                bgAttachment="scroll" 
                bgRepeat="no-repeat"
            >
                <VStack
                    position="absolute"
                    top={{ base: "45%", md: "50%" }}  
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    color="white"
                    spacing={4}
                    p="4"
                    bgGradient="linear(to-t, transparent, blackAlpha.700)"
                    borderRadius="lg"
                    maxWidth="lg"
                >
                    <Text fontSize={{ base: "xl", md: "2xl" }}>
                        Dream. Develop. Disrupt.
                    </Text>
                    <Button
                        bg="#20265E"  
                        color="white"  
                        size="lg"
                        onClick={handleSignUpClick}
                        _hover={{ bg: '#1a1e4d' }}  
                    >
                        Sign Up
                    </Button>
                </VStack>
            </Box>

            {/* "Who Are We?" Section */}
            <Box 
                p={{ base: 6, md: 10 }}  // Responsive padding for mobile and desktop
                bg="gray.100"  
                textAlign="center"
                mx="auto"  
                mt={12}  
                borderRadius="md"  
                boxShadow="lg"  
                maxW="4xl"  // Ensure the box width is constrained for better readability
            >
                <Text fontSize="2xl" fontWeight="bold" mb={6}>Who Are We?</Text>  {/* Increased font size */}
                <Text fontSize="lg" lineHeight="1.8">
                    At EntSoc, we unite a diverse group of driven students who share a passion for entrepreneurship. We’re not just a society; we’re a community that fosters creativity, cultivates business knowledge, and builds the confidence needed to bring entrepreneurial visions to life.
                </Text>
                <Text fontSize="lg" mt={6} lineHeight="1.8">
                    Through impactful events, competitions, and collaborations, we’ve made our mark, hosting over 60 speakers from 18 countries and 200+ competition participants in past years. We collaborate with 7 Scottish universities, support 4 local businesses, and contribute to charity, raising £1,500 annually for partner organizations.
                </Text>
                <Text fontSize="lg" mt={6} lineHeight="1.8">
                    Our goal? To offer high-quality learning and networking experiences that equip our members with the skills and confidence to make real-world impact. Ready to make your mark? Join us for another year of impact and innovation.
                </Text>
            </Box>

            {/* Additional content (transparent to enable scrolling) */}
            <Box height="150vh" bg="transparent" />  
        </Box>
    );
}
