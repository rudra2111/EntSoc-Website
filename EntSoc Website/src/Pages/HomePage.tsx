import { Box, VStack, Text, Button, SimpleGrid, Image, Link } from '@chakra-ui/react';
import Footer from '../Components/Footer';

export default function HomePage() {
    const backgroundImageUrl = '/McEwanHall.jpg'; 
    const signUpUrl = "https://www.eusa.ed.ac.uk/activities/view/edinburghentrepreneurs?ref=conversationalainews.com";

    const handleSignUpClick = () => {
        window.open(signUpUrl, '_blank');
    }

    const committeeMembers = [
        {
            name: "Rudra Jadav",
            position: "President",
            image: "/Rudra Jadav.png",
            linkedin: "https://www.linkedin.com/in/rudrajadav",
        },
        {
            name: "Krishiv Chadha",
            position: "Vice President",
            image: "/Krish Chadha.png",
            linkedin: "https://www.linkedin.com/in/krishivchadha",
        },
        {
            name: "Ella Rowe",
            position: "Treasurer",
            image: "/Ella Rowe.png",
            linkedin: "http://linkedin.com/in/ella-tiare-rowe-4a091b205",
        },
        {
            name: "Sneha Guntury",
            position: "Chairperson",
            image: "/Sneha.png",
            linkedin: "https://www.linkedin.com/in/snehaguntury/",
        },
        {
            name: "Karney Morgan-Cheng",
            position: "Vice-Chairperson",
            image: "/",
            linkedin: "https://www.linkedin.com/in/karney-morgan-cheng-8790711aa/",
        },
        {
            name: "Kashvi Chabra",
            position: "Head of Speakers",
            image: "/Kashvi.png",
            linkedin: "https://www.linkedin.com/in/kashvi-chabbra/",
        },
        {
            name: "Saumya Jindal",
            position: "Speakers Coordinators",
            image: "/Saumya.png",
            linkedin: "https://www.linkedin.com/in/saumya-jindal-j17?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
            name: "Abylay Orazbek",
            position: "Speakers Coordinators",
            image: "/Abylay.png",
            linkedin: "https://www.linkedin.com/in/abylay-orazbek-500593217/",
        },
        {
            name: "Arnav Upamanyu",
            position: "Co-Head of SEN & VCP",
            image: "/Arnav.png",
            linkedin: "https://www.linkedin.com/in/arnav-upmanyu-/",
        },
        {
            name: "Sophie Donkers",
            position: "Co-Head of SEN & VCP",
            image: "/Sophie.png",
            linkedin: "www.linkedin.com/in/sophiedonkers",
        },
        {
            name: "George Patin",
            position: "Head of Foundry",
            image: "/George.png",
            linkedin: "https://www.linkedin.com/in/georgepatin/",
        },
        {
            name: "Shifa Ali",
            position: "Community Manager",
            image: "/",
            linkedin: "https://www.linkedin.com/in/shifa27/",
        },
        {
            name: "Celine Venusa",
            position: "Co-Head of REACH",
            image: "/Celine.png",
            linkedin: "https://www.linkedin.com/in/celine-venusa-579a631b2",
        },
        {
            name: "Zhijian Zhang",
            position: "Co-Head of REACH",
            image: "/Zhijian.png",
            linkedin: "https://www.linkedin.com/in/",
        },
        {
            name: "Aisling Kelly",
            position: "Corporate Sponsorship Coordinator",
            image: "/Aisling.png",
            linkedin: "https://www.linkedin.com/in/aislingekelly/",
        },
        {
            name: "Anastasia McMillan",
            position: "Social Secretary",
            image: "/Anastasia.png",
            linkedin: "https://www.linkedin.com/in/anastasia-mcmillan/",
        },
        {
            name: "Diana Georgievskaya",
            position: "Social Secretary",
            image: "/Diana.png",
            linkedin: "https://www.linkedin.com/in/diana-georgievskaya/",
        },
        {
            name: "Palak Jain",
            position: "Co-Head of Marketing",
            image: "/Palak.jpeg",
            linkedin: "https://www.linkedin.com/in/palakjaininedinburgh/",
        },
        {
            name: "Ermioni Vasileiadou",
            position: "Co-Head of Marketing",
            image: "/Hermi.png",
            linkedin: "https://www.linkedin.com/in/ermioni-vasileiadou-b303b4314/",
        },

    ];

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
                p={{ base: 6, md: 10 }}  
                bg="gray.100"  
                textAlign="center"
                mx="auto"  
                mt={12}  
                borderRadius="md"  
                boxShadow="lg"  
                maxW="4xl"
            >
                <Text fontSize="2xl" fontWeight="bold" mb={6}>Who Are We?</Text>  
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

            {/* "Our Team" Section */}
            <Box 
                p={{ base: 6, md: 10 }}  
                textAlign="center"
                mx="auto"  
                mt={12}  
                maxW="5xl"
            >
                <Text fontSize="2xl" fontWeight="bold" mb={6}>Our Team</Text>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    {committeeMembers.map((member) => (
                        <VStack key={member.name} spacing={4} align="center">
                            <Image
                                borderRadius="full"
                                boxSize="150px"
                                src={member.image}
                                alt={member.name}
                                objectFit='cover'
                            />
                            <Text fontWeight="bold">{member.name}</Text>
                            <Text color="gray.500">{member.position}</Text>
                            <Link href={member.linkedin} color="blue.500" isExternal>
                                LinkedIn
                            </Link>
                        </VStack>
                    ))}
                </SimpleGrid>
            </Box>

            <Footer />
        </Box>
    );
}
